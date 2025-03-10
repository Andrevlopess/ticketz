import { Inject, Injectable } from '@nestjs/common';
import {
  DrizzleAsyncProvider,
  GlobalSchema,
  User,
  UserDto,
} from '@ticketz/database';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  createProduct(product: UserDto) {
    const newUser = this.db.insert(User).values(product).returning();
    return newUser;
  }

  getProducts() {
    return this.db.select().from(User);
  }
}
