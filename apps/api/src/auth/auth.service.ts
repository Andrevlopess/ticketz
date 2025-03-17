import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResponse } from '@ticketz/types';
import { RoleEnum, Role } from '@ticketz/database';
import bcrypt from 'bcrypt';
import appConfig from 'src/config/app.config';
import { UsersService } from '../schemas/users/users.service';
import { z } from 'zod';

type RefreshTokenPayload = { sub: number; org: number };
export type User = { id: string; email: string; org: number; role: Role };
export type AccessTokenPayload = Omit<User, 'id'> & { sub: number };

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(data: AuthInput): Promise<AccessTokenPayload | null> {
    const user = await this.usersService.findUserByEmail(data.email);
    if (!user) return null;

    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) return null;

    return {
      sub: user.id,
      email: user.email,
      org: user.defaultOrganizationId,
      role: 'ADMIN'
    };
  }

  async validateMembership(userId: number, organizationId: number) {
    return this.usersService.validateMembership(userId, organizationId);
  }

  async authenticate(user: AuthInput): Promise<AuthResponse> {
    const validUser = await this.validateUser(user);

    if (!validUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this._generateAccessToken(validUser);
    const refreshToken = await this._generateRefreshToken(validUser);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async _generateAccessToken(
    payload: AccessTokenPayload,
  ): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }

  private async _generateRefreshToken(
    payload: RefreshTokenPayload,
  ): Promise<string> {
    return await this.jwtService.signAsync(
      { sub: payload.sub },
      {
        secret: appConfig().jwtRefreshSecret,
        expiresIn: '1d',
      },
    );
  }

  async refreshToken(token: string): Promise<AuthResponse> {
    try {
      const payload: AccessTokenPayload = await this.jwtService.verifyAsync(
        token,
        {
          secret: appConfig().jwtRefreshSecret,
        },
      );

      const accessToken = await this._generateAccessToken({
        sub: payload.sub,
        email: payload.email,
        org: payload.org,
        role: 'ADMIN'
      });

      const refreshToken = await this._generateRefreshToken({
        sub: payload.sub,
        org: payload.org,
      });

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
