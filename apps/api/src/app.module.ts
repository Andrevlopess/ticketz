import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { CategoriesModule } from './schemas/categories/categories.module';
import { GroupsModule } from './schemas/groups/groups.module';
import { MembersModule } from './schemas/members/members.module';
import { OrganizationsModule } from './schemas/organizations/organizations.module';
import { TagsModule } from './schemas/tags/tags.module';
import { TicketsModule } from './schemas/tickets/tickets.module';
import { UsersModule } from './schemas/users/users.module';
// import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    TicketsModule,
    AuthModule,
    OrganizationsModule,
    TagsModule,
    OrganizationsModule,
    GroupsModule,
    MembersModule,
    CategoriesModule,
    // CaslModule
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
    // {
    //   provide: APP_GUARD,
    //   useClass: PoliciesGuard,
    // },
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(AuthMiddleware).forRoutes('*');
//   }
// }
