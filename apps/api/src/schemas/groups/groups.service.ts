import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
} from '@nestjs/common';
import { GlobalSchema, Group, GroupInsert, GroupMembership } from '@ticketz/database';
import { and, desc, eq, getTableColumns, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import type { Request } from 'express';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
import z from 'zod';

const GroupUpdateSchema = createUpdateSchema(Group);

export type GroupUpdate = z.infer<typeof GroupUpdateSchema>;

@Injectable()
export class GroupsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  async create(createGroupDto: GroupInsert) {
    const parsed = createInsertSchema(Group).safeParse(createGroupDto);

    if (!parsed.success) throw new ZodException(parsed.error);



    const [group] = await this.db.transaction(async (trx) => {
      const [alreadyExists] = await trx
        .select()
        .from(Group)
        .where(
          and(
            eq(Group.name, createGroupDto.name),
            eq(Group.organizationId, createGroupDto.organizationId),
          ),
        );

      if (alreadyExists)
        throw new BadRequestException(
          `Group '${createGroupDto.name}' already exists!`,
        );

      return trx.insert(Group).values(createGroupDto).returning();
    });

    return group;
  }

  async findAll(orgId: number) {
    return this.db
      .select()
      .from(Group)
      .where(eq(Group.organizationId, orgId))
      .orderBy(desc(Group.createdAt));
  }

  async findOne(id: number, orgId: number) {
    const [group] = await this.db
      .select()
      .from(Group)
      .where(and(eq(Group.organizationId, orgId), eq(Group.id, id)));

    if (!group) throw new NotFoundException(`Group #${id} not found!`);

    return group;
  }

  async update(id: number, updateGroupDto: GroupUpdate) {
    const parsed = GroupUpdateSchema.safeParse(updateGroupDto);

    if (!parsed.success) throw new ZodException(parsed.error);

    // check if group already exists
    const alreadyExists = await this.db.query.Group.findFirst({
      where: eq(Group.id, id),
    });

    if (!alreadyExists) {
      throw new NotFoundException('Group not found', {
        cause: new Error(),
        description: `Group with id ${id} not found`,
      });
    }

    const [group] = await this.db.transaction(async (trx) => {
      // check if group name is unique
      if (updateGroupDto.name) {
        const [alreadyExists] = await trx
          .select()
          .from(Group)
          .where(eq(Group.name, updateGroupDto.name));

        if (alreadyExists)
          throw new BadRequestException(
            `Group '${updateGroupDto.name}' already exists!`,
          );
      }

      // update group
      return trx
        .update(Group)
        .set(updateGroupDto)
        .where(eq(Group.id, id))
        .returning();
    });

    return group;
  }

  async remove(id: number) {
    const group = await this.db.query.Group.findFirst({
      where: eq(Group.id, id),
    });

    if (!group) {
      throw new NotFoundException('Group not found', {
        cause: new Error(),
        description: `Group with id ${id} not found`,
      });
    }

    const [deletedGroup] = await this.db
      // .delete(Group)
      .delete(Group)
      .where(eq(Group.id, id))
      .returning();

    return deletedGroup;
  }
}
