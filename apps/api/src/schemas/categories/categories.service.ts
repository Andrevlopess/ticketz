import { Inject, Injectable } from '@nestjs/common';
import { Category, CategoryInsert, GlobalSchema } from '@ticketz/database';
import { and, eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  create(createCategoryDto: CategoryInsert) {
    return this.db.insert(Category).values(createCategoryDto).returning();
  }

  async findAll(orgId: number) {
    const [categories] = await this.db
      .select()
      .from(Category)
      .where(eq(Category.organizationId, orgId));

    return categories;
  }

  async findOne(id: number, orgId: number) {
    const [category] = await this.db
      .select()
      .from(Category)
      .where(and(eq(Category.organizationId, orgId), eq(Category.id, id)));

    return category;
  }

  update(id: number, updateCategoryDto: any) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
