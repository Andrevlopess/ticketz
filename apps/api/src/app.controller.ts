import {
  Controller,
  Get
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly authService: AuthService,
  ) {}

  @Get()
  root() {
    return this.appService.getRoot();
  }

  // @Public()
  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // login(@Body() teste: any) {
  //   // return teste
  //   return this.authService.login(teste);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user
  // }
}
