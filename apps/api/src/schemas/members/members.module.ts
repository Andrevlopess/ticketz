import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  imports: [DrizzleModule],
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
