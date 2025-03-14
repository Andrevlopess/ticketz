import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { TicketGroupsController } from './ticket-groups.controller';
import { TicketGroupsService } from './ticket-groups.service';

@Module({
  imports: [DrizzleModule],
  controllers: [TicketGroupsController],
  providers: [TicketGroupsService],
})
export class TicketGroupsModule {}
