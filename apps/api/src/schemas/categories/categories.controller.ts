import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import type { CategoryInsert } from '@ticketz/database';
import type { Request } from 'express';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CategoryInsert) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.categoriesService.findAll(req.user.orgId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.categoriesService.findOne(+id, req.user.orgId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: any) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
