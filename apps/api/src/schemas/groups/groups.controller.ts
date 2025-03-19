import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import type { GroupInsert } from '@ticketz/database';
import { GroupsService } from './groups.service';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupsService: GroupsService,
  ) {}

  @Post()
  @Roles('ADMIN')
  create(@Body() createGroupDto: GroupInsert) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: any) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }
}
