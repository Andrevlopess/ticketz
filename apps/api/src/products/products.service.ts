import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@ticketz/types';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];
    
    createProduct(product: CreateProductRequest) {
        this.products.push({
            ...product,
            id: Math.random().toString(36).substring(5),
        });
        return product;
    }
    
    getProducts() {
        return this.products;
    }
}
