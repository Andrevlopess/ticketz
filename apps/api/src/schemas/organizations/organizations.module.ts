import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { OrganizationMembersModule } from './organization-members/organization-members.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DrizzleModule, OrganizationMembersModule, AuthModule],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
