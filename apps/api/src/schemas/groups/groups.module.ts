import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { GroupMembersModule } from './group-members/group-members.module';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [DrizzleModule, GroupMembersModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
