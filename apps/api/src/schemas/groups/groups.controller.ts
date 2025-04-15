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
  UseGuards
} from '@nestjs/common';
import type { GroupInsert } from '@ticketz/database';
import type { Request } from 'express';
import { Roles } from 'src/decorators/roles.decorator';
import { GroupsService } from './groups.service';
import { GroupPoliciesGuard } from 'src/auth/guards/group-policies.guard';
import { CheckPolicies } from 'src/decorators/policies.decorator';
import { GroupAbility } from '@ticketz/auth';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('organizations/:slug/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}
  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) => ability.can('create', 'Group'))
  // @Roles('ADMIN')


  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(
    @Param('slug') slug: string,
    @Body() createGroupDto: GroupInsert,
  ) {
    return this.groupsService.create(createGroupDto, slug);
  }

  // @Roles('USER')
  @Get()
  findAll(@Param('slug') slug: string, @Req() req: Request) {
    return this.groupsService.findAll(slug);
  }

  @Get(':groupId')
  findOne(
    @Param('slug') orgSlug: string,
    @Param('groupId', ParseIntPipe) groupId: number,
    @Req() req: Request,
  ) {
    return this.groupsService.findOne(groupId, orgSlug);
  }

  @UseGuards(GroupPoliciesGuard)
  @CheckPolicies((ability: GroupAbility) => ability.can('update', 'Group'))
  // @UseGuards(RolesGuard)
  // @Roles('ADMIN')
  @Patch(':groupId')
  // todo: only admins can update group name. gms can only update group description
  update(@Param('groupId', ParseIntPipe) groupId: number, @Body() updateGroupDto: any) {
    
    return this.groupsService.update(groupId, updateGroupDto);
  }

  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  @Delete(':groupId')
  remove(@Param('groupId', ParseIntPipe) groupId: number) {
    return this.groupsService.remove(+groupId);
  }
}

// only a group_manager can invite and remove members from a group