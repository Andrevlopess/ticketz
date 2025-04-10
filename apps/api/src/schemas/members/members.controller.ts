import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { Roles } from 'src/decorators/roles.decorator';
import { MembersService } from './members.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('organizations/:slug/members')
export class MembersController {
  constructor(private readonly MembersService: MembersService) {}

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Get()
  async findMany(@Param('slug') slug: string, @Req() req: Request) {
    return this.MembersService.findMany(req.organization.id);
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Get(':memberId')
  findOne(
    @Param('memberId', ParseIntPipe) memberId: number,
    @Req() req: Request,
  ) {
    console.log(req.organization);

    return this.MembersService.findOne(memberId, req.organization.id);
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Post()
  addMember(@Req() req: Request, @Body() user: Pick<UserSelect, 'id'>) {
    return this.MembersService.add(req.organization.id, user.id);
  }

  @Delete(':userId')
  removeTag(
    @Param('id', ParseIntPipe) id: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.MembersService.remove(id, userId);
  }
}
