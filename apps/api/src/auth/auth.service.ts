import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InMemoryUser, UsersService } from './../users/users.service';

export type AuthInput = { email: string; password: string };
export type AuthResult = { accessToken: string; sub: number; email: string };
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(
    data: AuthInput,
  ): Promise<Omit<InMemoryUser, 'password'> | null> {
    const user = await this.usersService.findUserByEmail(data.email);

    if (user && user.password === data.password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async authenticate(userData: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(userData);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.signIn(user)
  }

  async signIn(user: any): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      ...tokenPayload,
      accessToken,
    };
  }
}
