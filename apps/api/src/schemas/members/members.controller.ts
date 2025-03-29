import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { MembersService } from './members.service';

@Controller('organizations/:slug/members')
export class MembersController {
  constructor(private readonly MembersService: MembersService) {}

  @Get()
  findMany(@Param('slug') slug: string, @Req() req: Request) {
    return this.MembersService.findMany(slug);
  }

  @Get(':memberId')
  findOne(
    @Param('slug') slug: string,
    @Param('memberId', ParseIntPipe) memberId: number,
    @Req() req: Request,
  ) {
    return this.MembersService.findOne(memberId, slug);
  }

  @Post()
  addMember(
    // @Param('id', ParseIntPipe) id: number,
    @Body() users: Pick<UserSelect, 'id'>[],
  ) {
    // return thi/s.MembersService.add(users);
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
