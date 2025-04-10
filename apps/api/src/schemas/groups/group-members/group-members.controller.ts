import {
  BadRequestException,
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
import { AppAbility, GroupAbility } from '@ticketz/auth';
import { UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { GroupMembersService } from './group-members.service';
import { GroupPoliciesGuard } from 'src/auth/guards/group-policies.guard';
import { AppPoliciesGuard } from 'src/auth/guards/app-policies.guard';
import { CheckPolicies } from 'src/decorators/policies.decorator';

@Controller('organizations/:slug/groups/:groupId/members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Get()
  findMany(
    @Param('slug') slug: string,
    @Param('groupId', ParseIntPipe) groupId: number,
  ) {
    return this.groupMembersService.findMany(groupId, slug);
  }

  @UseGuards(GroupPoliciesGuard)
  @CheckPolicies((ability: GroupAbility) =>
    ability.can('create', 'GroupMembers'),
  )
  @Post()
  addMember(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Param('slug') orgSlug: string,
    @Body() user: Pick<UserSelect, 'id'>,
  ) {
    return this.groupMembersService.add(groupId, user.id, orgSlug);
  }

  @UseGuards(GroupPoliciesGuard)
  @CheckPolicies((ability: GroupAbility) =>
    ability.can('delete', 'GroupMembers'),
  )
  @Delete(':memberId')
  removeMember(
    @Param(
      'groupId',
      new ParseIntPipe({
        exceptionFactory: (e) =>
          new BadRequestException('Group id was not provided!'),
      }),
    )
    groupId: number,
    @Param(
      'memberId',
      new ParseIntPipe({
        exceptionFactory: (e) =>
          new BadRequestException('Member id was not provided!'),
      }),
    )
    userId: number,
  ) {
    return this.groupMembersService.remove(groupId, userId);
  }
}
