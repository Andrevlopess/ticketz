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
import { GroupAbility } from '@ticketz/auth';
import { UserSelect } from '@ticketz/database';
import type { Request } from 'express';
import { PoliciesGuard } from 'src/auth/guards/policies.guard';
import { CheckPolicies } from 'src/decorators/policies.decorator';
import { GroupMembersService } from './group-members.service';

@Controller('organizations/:slug/groups/:groupId/members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) =>
  //   ability.can('read', 'Group'),
  // )

  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: GroupAbility) =>
    ability.can('read', 'GroupMembers'),
  )
  @Get()
  findMany(
    @Param('slug') slug: string,
    @Param('groupId', ParseIntPipe) groupId: number,
    @Req() req: Request,
  ) {
    return this.groupMembersService.findMany(groupId, slug);
  }

  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: GroupAbility) =>
    ability.can('create', 'GroupMembers'),
  )
  @Post()
  addMember(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Body() user: Pick<UserSelect, 'id'>,
    @Req() req: Request,
  ) {

    // return {
    //   user: req.user,
    //   org: req.organization,
    // }

    return 'teste'

    return this.groupMembersService.add(groupId, user.id);
  }

  // @Patch()
  // bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
  //   return this.groupMembersService.bulkRemove(id, tags);
  // }

  // @UseGuards(PoliciesGuard)
  // @CheckPolicies((ability: AppAbility) =>
  //   ability.can('remove_members', 'Group'),
  // )
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
    // @Req() req: Request,/
  ) {
    return this.groupMembersService.remove(groupId, userId);
  }
}
