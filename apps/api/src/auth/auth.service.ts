import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResponse } from '@ticketz/types';
// import { RoleEnum, Role } from '@ticketz/database';
import bcrypt from 'bcrypt';
import appConfig from 'src/config/app.config';
import { UsersService } from '../schemas/users/users.service';
import { z } from 'zod';
import { Role } from '@ticketz/database';

type RefreshTokenPayload = { sub: number; orgId: number };
export type User = { id: string; email: string; orgId: number; role: Role };
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
      orgId: user.defaultOrganizationId,
      role: user.role,
    };
  }

  async getMembership(userId: number, organizationId: number) {
    return this.usersService.getMembership(userId, organizationId);
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
        expiresIn: '30d',
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
        orgId: payload.orgId,
        role: payload.role,
      });

      const refreshToken = await this._generateRefreshToken({
        sub: payload.sub,
        orgId: payload.orgId,
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
