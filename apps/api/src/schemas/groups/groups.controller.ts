import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import type { GroupInsert } from '@ticketz/database';
import { GroupsService } from './groups.service';
import { Roles } from 'src/decorators/roles.decorator';
import type { Request } from 'express';
import { defineAbilityFor, userSchema } from '@ticketz/auth';
import { getUserPermissions } from 'src/utils/get-user-permissions';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @Roles('ADMIN')
  create(@Body() createGroupDto: GroupInsert, @Req() req: Request) {

    const { cannot } = getUserPermissions(req.user);

    if (cannot('create', 'Group')) {
      throw new ForbiddenException('You are not allowed to create groups.');
    }

    return 'ta liberado papai'
    
    return this.groupsService.create({
      ...createGroupDto,
      organizationId: req.user.org.id,
    });
  }

  @Get()
  findAll(@Req() req: Request) {
    const { cannot } = getUserPermissions(req.user);

    if (cannot('read', 'Group')) {
      throw new ForbiddenException('You are not allowed to read groups.');
    }

    return this.groupsService.findAll(req.user.org.id);
  }

  @Get(':id')
  @Roles('ADMIN')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    return this.groupsService.findOne(id, req.user.org.id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGroupDto: any,
    @Req() req: Request,
  ) {
    const { cannot } = getUserPermissions(req.user);

    if (cannot('create', 'Group')) {
      throw new ForbiddenException('You are not allowed to create groups.');
    }

    return 'ta liberado papai'

    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.remove(+id);
  }
}

// only a group_manager can invite and remove members from a group
