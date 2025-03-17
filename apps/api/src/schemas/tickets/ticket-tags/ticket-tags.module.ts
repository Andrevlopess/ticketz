import { Module } from '@nestjs/common';
import { TicketTagsService } from './ticket-tags.service';
import { TicketTagsController } from './ticket-tags.controller';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  controllers: [TicketTagsController],
  providers: [TicketTagsService],
})
export class TicketTagsModule {}
