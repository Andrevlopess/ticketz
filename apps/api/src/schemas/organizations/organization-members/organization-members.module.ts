import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { GroupMembersController } from './organization-members.controller';
import { GroupMembersService } from './organization-members.service';

@Module({
  imports: [DrizzleModule],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
