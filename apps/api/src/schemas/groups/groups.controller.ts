import {
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
  UseGuards,
} from '@nestjs/common';
import type { GroupInsert } from '@ticketz/database';
import type { Request } from 'express';
import { Roles } from 'src/decorators/roles.decorator';
import { getUserPermissions } from 'src/utils/get-user-permissions';
import { GroupsService } from './groups.service';
import { AppAbility } from '@ticketz/auth';
import { Action } from 'rxjs/internal/scheduler/Action';
import { PoliciesGuard } from 'src/auth/guards/policies.guard';
import { CheckPolicies } from 'src/decorators/policies.decorator';

@Controller('organizations/:slug/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) => ability.can('create', 'Group'))
  @Roles('ADMIN')
  @Post()
  create(
    @Param('slug') slug: string,
    @Body() createGroupDto: GroupInsert,
    @Req() req: Request,
  ) {
    return this.groupsService.create(createGroupDto);
  }

  // @Roles('USER')
  @Get()
  findAll(@Param('slug') slug: string, @Req() req: Request) {
    return this.groupsService.findAll(slug);
  }

  @Get(':id')
  findOne(
    @Param('slug') slug: string,
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
  ) {
    return this.groupsService.findOne(id, slug);
  }

  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) => ability.can('update', 'Group'))

  @Roles('ADMIN')
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateGroupDto: any) {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.groupsService.remove(+id);
  }
}

// only a group_manager can invite and remove members from a group
