import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequest } from '@ticketz/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductRequest: CreateProductRequest) {
    return this.productsService.createProduct(createProductRequest);
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }
}
