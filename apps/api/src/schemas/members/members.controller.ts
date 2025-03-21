import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req
} from '@nestjs/common';
import { UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(
    private readonly MembersService: MembersService,
  ) {}

  @Get()
  findMany(@Req() req: Request) {
    return this.MembersService.findMany(req.user.orgId);
  }

  @Post()
  addMember(
    @Param('id', ParseIntPipe) id: number,
    @Body() users: Pick<UserSelect, 'id'>[],
  ) {
    return this.MembersService.add(id, users);
  }

  // @Patch()
  // bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
  //   return this.MembersService.bulkRemove(id, tags);
  // }

  @Delete(':userId')
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.MembersService.remove(id, userId);
  }
}
