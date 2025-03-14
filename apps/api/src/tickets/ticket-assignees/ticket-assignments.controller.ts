import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { TicketAssignmentsInsert, UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { TicketAssignmentsService } from './ticket-assignments.service';

export type AssignTicketPayload = Pick<TicketAssignmentsInsert, 'assigneeId'>[];

@Controller('tickets/:id/assignments')
export class TicketAssignmentsController {
  constructor(
    private readonly ticketAssigneesService: TicketAssignmentsService,
  ) {}

  @Get()
  findMany(@Param('id', ParseIntPipe) id: number) {
    return this.ticketAssigneesService.findMany(id);
  }

  @Post()
  addTag(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: AssignTicketPayload,
    @Req() req: Request,
  ) {
    
    if (!req.user?.sub) {
      throw new UnauthorizedException();
    }

    return this.ticketAssigneesService.add(id, req.user.sub, body);
  }

  @Patch()
  bulkRemove(
    @Param('id', ParseIntPipe) id: number,
    @Body() Assignees: AssignTicketPayload,
  ) {
    // return this.ticketAssigneesService.bulkRemove(id, Assignees);
  }

  @Delete(':assigneeId')
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
  ) {
    return this.ticketAssigneesService.remove(id, assigneeId);
  }
}
