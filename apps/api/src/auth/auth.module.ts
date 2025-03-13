import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './stategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.registerAsync(jwtConfig)],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
