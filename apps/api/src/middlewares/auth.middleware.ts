import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { AccessTokenPayload, AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    req.getCurrentUserId = async () => {
      const token = this.extractTokenFromHeader(req);

      if (!token) {
        throw new UnauthorizedException('Token not provided!');
      }

      try {
        const { sub } =
          await this.jwtService.verifyAsync<AccessTokenPayload>(token);

        return sub;
      } catch {
        throw new UnauthorizedException('Invalid token provided!');
      }
    };

    req.getUserMembership = async (id: number) => {
      const userId = await req.getCurrentUserId();

      const member = await this.authService.getMembership(userId, id);

      if (!member) {
        throw new UnauthorizedException(
          `You're not a member of this organization.`,
        );
      }
      const { organization, membership } = member;

      return {
        organization,
        membership,
      };
    };

    next();
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
