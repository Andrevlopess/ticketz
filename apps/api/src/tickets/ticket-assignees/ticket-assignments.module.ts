import { Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';
import { TicketAssignmentsController } from './ticket-assignments.controller';
import { TicketAssignmentsService } from './ticket-assignments.service';

@Module({
  imports: [DrizzleModule],
  controllers: [TicketAssignmentsController],
  providers: [TicketAssignmentsService],
})
export class TicketAssignmentsModule {}
