import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { GroupMembersService } from './group-members.service';
import { GroupMembersController } from './group-members.controller';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [DrizzleModule, CaslModule],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
