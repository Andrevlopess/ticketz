import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { GroupsModule } from './schemas/groups/groups.module';
import { OrganizationsModule } from './schemas/organizations/organizations.module';
import { ProfilesModule } from './schemas/profiles/profiles.module';
import { TagsModule } from './schemas/tags/tags.module';
import { TicketsModule } from './schemas/tickets/tickets.module';
import { UsersModule } from './schemas/users/users.module';
import { MembersModule } from './schemas/members/members.module';
import { CategoriesModule } from './schemas/categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    ProfilesModule,
    TicketsModule,
    AuthModule,
    OrganizationsModule,
    TagsModule,
    OrganizationsModule,
    GroupsModule,
    MembersModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(AuthMiddleware).forRoutes('*');
//   }
// }
