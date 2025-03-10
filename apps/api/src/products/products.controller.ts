import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import type {  UserDto } from '@ticketz/database';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductRequest: UserDto) {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
}
