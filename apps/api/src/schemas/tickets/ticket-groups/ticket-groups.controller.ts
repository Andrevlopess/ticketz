import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TagSelect } from '@ticketz/database';
import { TicketGroupsService } from './ticket-groups.service';

@Controller('tickets/:id/tags')
export class TicketGroupsController {
  constructor(private readonly ticketGroupsService: TicketGroupsService) {}

  @Get()
  findMany(@Param('id', ParseIntPipe) id: number) {
    return this.ticketGroupsService.findMany(id);
  }

  @Post()
  addTag(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
    return this.ticketGroupsService.add(id, tags);
  }

  @Patch()
  bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
    return this.ticketGroupsService.bulkRemove(id, tags);
  }

  @Delete(':tagId')
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('tagId', ParseIntPipe) tagId: number,
  ) {
    return this.ticketGroupsService.remove(id, tagId);
  }
}
