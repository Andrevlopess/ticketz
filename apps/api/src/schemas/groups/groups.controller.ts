import {
  BadRequestException,
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
import type { GroupInsert } from '@ticketz/database';
import { GroupsService } from './groups.service';
import { Roles } from 'src/decorators/roles.decorator';
import type { Request } from 'express';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @Roles('ADMIN')
  create(@Body() createGroupDto: GroupInsert, @Req() req: Request) {
    return this.groupsService.create({
      ...createGroupDto,
      organizationId: req.user.orgId,
    });
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.groupsService.findAll(req.user.orgId);
  }

  @Get(':id')
  @Roles('ADMIN')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    return this.groupsService.findOne(id, req.user.orgId);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGroupDto: any) {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.remove(+id);
  }
}


// only a group_manager can invite and remove members from a group