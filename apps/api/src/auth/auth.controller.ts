import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from 'src/decorators/public.decorator';
import type { AuthInput } from '@ticketz/types';
import type { Response, Request } from 'express';

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

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });
    return { message: 'User logged out successfully' };
  }

  @Public()
  @Post('refresh_token')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    // return req.cookies
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
  @Get('me')
  getUserInfo(@Req() req: Request) {
    // req.user is infered on the jwt guard.
    // req.user is the token decoded data
    return req.user;
  }
}
