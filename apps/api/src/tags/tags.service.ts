import { Inject, Injectable } from '@nestjs/common';
import { GlobalSchema, Tag, TagInsert } from '@ticketz/database';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class TagsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  create(createTagDto: TagInsert) {
   return this.db.insert(Tag).values(createTagDto).returning();
  }

  findAll() {
    return this.db.query.Tag.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: any) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
