import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResponse } from '@ticketz/types';
// import { RoleEnum, Role } from '@ticketz/database';
import bcrypt from 'bcrypt';
import appConfig from 'src/config/app.config';
import { UsersService } from '../schemas/users/users.service';
import { z } from 'zod';
import { GroupRole, Role } from '@ticketz/database';

// export type User = { id: string; orgId: number; role: Role };
export type RefreshTokenPayload = { sub: number };
export type AccessTokenPayload = {
  sub: number;
  org: { id: number; role: Role };
  grps?: {
    id: number;
    role: GroupRole;
  }[];
};

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

    if (!user.memberships[0]) return null;

    const payload: AccessTokenPayload = {
      sub: user.id,
      org: {
        id: user.memberships[0].organizationId,
        role: user.memberships[0].role as Role,
      },
      grps: user.groupMemberships.map((group) => ({
        id: group.groupId,
        role: group.role as GroupRole,
      })),
    };

    return payload;
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
    return await this.jwtService.signAsync(payload, {
      secret: appConfig().jwtRefreshSecret,
      expiresIn: '30d',
    });
  }

  async refreshToken(token: string) {
    // : Promise<AuthResponse> ;
    console.log(token);

    try {
      // const payload: Token = await this.jwtService.verifyAsync(token, {
      //   secret: appConfig().jwtRefreshSecret,
      // });
      // const accessToken = await this._generateAccessToken({
      //   sub: payload.sub,
      //   role: payload.role,
      //   orgId: payload.orgId,
      // });
      // const refreshToken = await this._generateRefreshToken({
      //   sub: payload.sub,
      //   role: payload.role,
      //   orgId: payload.orgId,
      // });
      // return {
      //   accessToken,
      //   refreshToken,
      // };
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
