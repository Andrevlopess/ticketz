import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import type { TagInsert, TicketInsert } from '@ticketz/database';
import { z } from 'zod';
import type { TicketFieldsToInclude } from 'src/types/ticket';

@Controller('/organizations/:slug/tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: TicketInsert) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  findAll(@Param('slug') orgSlug: string, @Query('includes') includes: string) {
    return this.ticketsService.findAll(orgSlug, includes);
  }

  @Get(':ticketId')
  findOne(
    @Param('ticketId') ticketId: string,
    @Param('slug') orgSlug: string,
    @Query('includes') includes: string,
  ) {
    return this.ticketsService.findOne(+ticketId, orgSlug, includes);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: any) {
    return this.ticketsService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(+id);
  }
}
