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
import { GroupMembersService } from './group-members.service';
import { AppAbility } from '@ticketz/auth';
import { PoliciesGuard } from 'src/auth/guards/policies.guard';
import { CheckPolicies } from 'src/decorators/policies.decorator';

@Controller('organizations/:slug/groups/:groupId/members')
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Get()
  findMany(
    @Param('slug') slug: string,
    @Param('groupId', ParseIntPipe) groupId: number,
    @Req() req: Request,
  ) {
    return this.groupMembersService.findMany(groupId, slug);
  }

  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can('invite_members', 'Group'),
  )
  @Post()
  addMember(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Body() userId: Pick<UserSelect, 'id'>,
    @Req() req: Request,
  ) {
    return this.groupMembersService.add(req.user.sub, groupId, userId);
  }
  
  // @Patch()
  // bulkRemove(@Param('id', ParseIntPipe) id: number, @Body() tags: TagSelect[]) {
  //   return this.groupMembersService.bulkRemove(id, tags);
  // }

  @UseGuards(PoliciesGuard)
  @CheckPolicies((ability: AppAbility) =>
    ability.can('remove_members', 'Group'),
  )
  @Delete(':userId')
  removeTag(
    @Param('groupId', ParseIntPipe) groupId: number,
    @Param('userId', ParseIntPipe) userId: number,
    // @Req() req: Request,/
  ) {
    return this.groupMembersService.remove(groupId, userId);
  }
}
