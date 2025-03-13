import bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { AuthInput, AuthResponse, RefreshTokenInput } from '@ticketz/types';
import appConfig from 'src/config/app.config';

type RefreshTokenPayload = { sub: number };
type AccessTokenPayload = { sub: number; email: string };

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
    };
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
        expiresIn: '1h',
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
      });

      const refreshToken = await this._generateRefreshToken({
        sub: payload.sub,
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
