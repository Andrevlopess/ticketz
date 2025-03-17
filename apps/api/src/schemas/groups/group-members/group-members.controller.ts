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
import { TagSelect, UserSelect } from '@ticketz/database';
import { GroupMembersService } from './group-members.service';

@Controller('groups/:id/members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Get()
  findMany(@Param('id', ParseIntPipe) id: number) {
    return this.groupMembersService.findMany(id);
  }

  @Post()
  addMember(@Param('id', ParseIntPipe) id: number, @Body() users: Pick<UserSelect, 'id'>[]) {
    return this.groupMembersService.add(id, users);
  }

  // @Patch()
  // bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
  //   return this.groupMembersService.bulkRemove(id, tags);
  // }

  @Delete(':userId')
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.groupMembersService.remove(id, userId);
  }
}
