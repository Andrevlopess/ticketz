import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { AuthInput } from '@ticketz/types';
import type { Request, Response } from 'express';
import { Public } from 'src/decorators/public.decorator';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public() // this skip the auth guard interception
  async create(
    @Body() data: AuthInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.authenticate(data);

    response.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    return { accessToken };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    return;
  }

  @Public()
  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
  
    const { accessToken, refreshToken } = await this.authService.refreshToken(
      req.cookies.refreshToken,
    );

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    return { accessToken };
  }

  @UseGuards(JwtAuthGuard)
  // @Roles('ADMIN')
  @Get('me')
  getUserInfo(@Req() req: Request) {
    // return ability.can('read', 'Post')
    // return teste
    // req.user is infered on the jwt guard.
    // req.user is the token decoded data
    return req.user;
  }
}
