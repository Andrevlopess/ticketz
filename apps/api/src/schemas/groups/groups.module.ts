import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { GroupMembersModule } from './group-members/group-members.module';
import { RouterModule } from '@nestjs/core';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [DrizzleModule, GroupMembersModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
