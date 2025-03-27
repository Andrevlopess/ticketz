import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards
} from '@nestjs/common';
import { UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { GroupMembersService } from './group-members.service';
import { Roles } from 'src/decorators/roles.decorator';
import { Permissions } from 'src/decorators/permissions.decorator';

@Controller('groups/:groupId/members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Get()
  @Roles('ADMIN')
  // @Permissions('read:group_members')
  findMany(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Req() req: Request,
  ) {
    return this.groupMembersService.findMany(groupId, req.user.org.id);
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
