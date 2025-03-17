import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { UserSelect } from '@ticketz/database';
import { OrganizationMembersService } from './organization-members.service';
import type { Request } from 'express';

@Controller('organizations/:id/members')
export class OrganizationMembersController {
  constructor(
    private readonly organizationMembersService: OrganizationMembersService,
  ) {}

  @Get()
  findMany(@Req() req: Request) {

    return this.organizationMembersService.findMany(req.user.org);
  }

  @Post()
  addMember(
    @Param('id', ParseIntPipe) id: number,
    @Body() users: Pick<UserSelect, 'id'>[],
  ) {
    return this.organizationMembersService.add(id, users);
  }

  // @Patch()
  // bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
  //   return this.organizationMembersService.bulkRemove(id, tags);
  // }

  @Delete(':userId')
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.organizationMembersService.remove(id, userId);
  }
}
