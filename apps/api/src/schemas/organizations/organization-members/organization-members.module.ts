import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { OrganizationMembersController } from './organization-members.controller';
import { OrganizationMembersService } from './organization-members.service';

@Module({
  imports: [DrizzleModule],
  controllers: [OrganizationMembersController],
  providers: [OrganizationMembersService],
})
export class OrganizationMembersModule {}
