// import {
//   Injectable,
//   NestMiddleware,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { NextFunction, Request, Response } from 'express';
// import { AccessTokenPayload } from 'src/auth/auth.service';
// import { UsersService } from 'src/schemas/users/users.service';

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   constructor(
//     private readonly userService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('......EXECUTED AUTH MIDDLEWARE......');

//     req.getCurrentUser = async () => {
//       const token = this.extractTokenFromHeader(req);
//       if (!token) {
//         throw new UnauthorizedException('Token not provided!');
//       }

//       try {
//         const payload =
//           await this.jwtService.verifyAsync<AccessTokenPayload>(token);

//         return payload;
//       } catch {
//         throw new UnauthorizedException('Invalid token provided!');
//       }
//     };

//     req.getUserMembership = async (slug: string) => {
//       const user = await req.getCurrentUser();

//       const member = await this.userService.getMembership(user.sub, slug);

//       if (!member) {
//         throw new UnauthorizedException(
//           `You're not a member of this organization.`,
//         );
//       }

//       const { organization, membership } = member;

//       return {
//         organization,
//         membership,
//       };
//     };


//     next();
//   }


//   private extractTokenFromHeader(request: Request): string | undefined {
//     const [type, token] = request.headers.authorization?.split(' ') ?? [];
//     return type === 'Bearer' ? token : undefined;
//   }
// }
