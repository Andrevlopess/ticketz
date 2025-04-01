import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, AuthResponse } from '@ticketz/types';
// import { RoleEnum, Role } from '@ticketz/database';
import { GroupRole, MembershipSelect, Role } from '@ticketz/database';
import bcrypt from 'bcrypt';
import appConfig from 'src/config/app.config';
import { UsersService } from '../schemas/users/users.service';

// export type User = { id: string; orgId: number; role: Role };
export type RefreshTokenPayload = { sub: number };
export type AccessTokenPayload = {
  sub: number;
};
// export type AccessTokenPayload = {
//   sub: number;
//   role: Role;
//   grps?: {
//     id: number;
//     role: GroupRole;
//   }[];
// };

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  // async getMembership(slug: string):Promise<MembershipSelect | null>{
  //   const mem this.usersService.getMembership(slug)
  // }

  async validateUser(data: AuthInput): Promise<AccessTokenPayload | null> {
    const user = await this.usersService.findUserByEmail(data.email);
    if (!user) return null;

    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) return null;

    if (!user.memberships[0]) return null;

    const payload: AccessTokenPayload = {
      sub: user.id,
      // role: user.memberships[0].role as Role,

      // grps: user.groupMemberships.map((group) => ({
      //   id: group.groupId,
      //   role: group.role as GroupRole,
      // })),
    };

    return payload;
  }

  async authenticate(user: AuthInput): Promise<AuthResponse> {
    const validUser = await this.validateUser(user);

    if (!validUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this._generateAccessToken(validUser);
    const refreshToken = await this._generateRefreshToken({
      sub: validUser.sub,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(token: string) {
    try {
      const tokenData: RefreshTokenPayload = await this.jwtService.verifyAsync(
        token,
        {
          secret: appConfig().jwtRefreshSecret,
        },
      );

      const user = await this.usersService.findUserById(tokenData.sub);
      if (!user) {
        throw new UnauthorizedException('User not found!');
      }

      if (!user.memberships[0]) {
        throw new UnauthorizedException('Membership not found!');
      }

      const payload: AccessTokenPayload = {
        sub: user.id,
        // role: user.memberships[0].role as Role,
        // grps: user.groupMemberships.map((group) => ({
        //   id: group.groupId,
        //   role: group.role as GroupRole,
        // })),
      };

      const refreshToken = await this._generateRefreshToken({
        sub: tokenData.sub,
      });

      const accessToken = await this._generateAccessToken(payload);

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new UnauthorizedException(error);
    }
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
}
