import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';
import appConfig from './app.config';

export const jwtConfig: JwtModuleAsyncOptions = {
  global: true,
  useFactory: (): JwtModuleOptions => ({
    secret: appConfig().jwtSecret,
    signOptions: { expiresIn: '1h' }, //todo: change to 15m
  }),
};
