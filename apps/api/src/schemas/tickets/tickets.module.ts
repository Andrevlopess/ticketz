import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { TicketTagsModule } from './ticket-tags/ticket-tags.module';
import { TicketAssignmentsModule } from './ticket-assignees/ticket-assignments.module';

@Module({
  imports: [DrizzleModule, TicketTagsModule, TicketAssignmentsModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
