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
} from '@nestjs/common';
import { TagSelect, UserSelect } from '@ticketz/database';
import { GroupMembersService } from './group-members.service';
import type { Request } from 'express';

@Controller('groups/:groupId/members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Get()
  findMany(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Req() req: Request,
  ) {
    return this.groupMembersService.findMany(groupId, req.user.orgId);
  }

  @Post()
  addMember(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Body() userId: Pick<UserSelect, 'id'>,
    @Req() req: Request,
  ) {
    return this.groupMembersService.add(req.user.sub, groupId, userId);
  }

  // @Patch()
  // bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
  //   return this.groupMembersService.bulkRemove(id, tags);
  // }

  @Delete(':userId')
  removeTag(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Req() req: Request,
  ) {
    return this.groupMembersService.remove(req.user.sub, groupId, userId);
  }
}
