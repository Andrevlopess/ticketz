import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { TicketAssignmentsModule } from './ticket-assignees/ticket-assignments.module';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

@Module({
  imports: [DrizzleModule, TicketAssignmentsModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
