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
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import type { AuthInput } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Public() // this skip the auth guard interception
  create(@Body() loginCredentials: AuthInput) {
    return this.authService.authenticate(loginCredentials);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getUserInfo(@Request() req) {
    // req.user is infered on the jwt guard.
    // req.user is the token decoded data
    return req.user;
  }
}
