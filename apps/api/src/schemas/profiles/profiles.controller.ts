import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import type { ProfileInsert } from '@ticketz/database';
import type { ProfileUpdate, RegisterInsert } from './profiles.service';
import { ProfilesService } from './profiles.service';
import { Public } from 'src/decorators/public.decorator';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profileService: ProfilesService) {}

  @Post()
  create(@Body() createUserDto: ProfileInsert) {
    return this.profileService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: ProfileUpdate) {
    return this.profileService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }

  @Public()
  @Post('register')
  register(@Body() registerUserDto: RegisterInsert) {
    return this.profileService.register(registerUserDto);
  }
}
