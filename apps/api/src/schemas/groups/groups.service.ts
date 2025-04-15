import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  Scope,
} from '@nestjs/common';
import {
  GlobalSchema,
  Group,
  GroupInsert,
  GroupMembership,
  Organization,
} from '@ticketz/database';
import { and, desc, eq, getTableColumns, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import type { Request } from 'express';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
import { createSlug } from 'src/utils/create-slug';
import z from 'zod';

const GroupUpdateSchema = createUpdateSchema(Group);

export type GroupUpdate = z.infer<typeof GroupUpdateSchema>;

@Injectable()
export class GroupsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  async create(createGroupDto: GroupInsert, slug: string) {
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

  async findAll(orgSlug: string) {
    return this.db
      .select({
        ...getTableColumns(Group),
      })
      .from(Group)
      .innerJoin(Organization, eq(Organization.id, Group.organizationId))
      .where(eq(Organization.slug, orgSlug))
      .orderBy(desc(Group.createdAt));
  }

  async findOne(groupId: number, orgSlug: string) {
    const [group] = await this.db
      .select({
        ...getTableColumns(Group),
        organizationSlug: Organization.slug,
      })
      .from(Group)
      .innerJoin(Organization, eq(Organization.id, Group.organizationId))
      .where(and(eq(Organization.slug, orgSlug), eq(Group.id, groupId)));

    if (!group) throw new NotFoundException(`Group #${groupId} not found!`);

    return group;
  }

  async update(id: number, updateGroupDto: GroupUpdate) {
    /*
     * Steps to check:
     * if payload is valid
     * if a group.name is provided, check if its unique and create a new slug for it
     */

    const parsed = GroupUpdateSchema.strict().safeParse(updateGroupDto);

    if (!parsed.success) throw new ZodException(parsed.error);

    const [group] = await this.db.transaction(async (trx) => {
      // check if group name is unique

      const updateDto = updateGroupDto;


      if (updateGroupDto.name) {
        const [alreadyExists] = await trx
          .select()
          .from(Group)
          .where(eq(Group.name, updateGroupDto.name));

        if (alreadyExists)
          throw new BadRequestException(
            `Group '${updateGroupDto.name}' already exists!`,
          );

        updateDto.slug = createSlug(updateGroupDto.name);

      }

      return trx
        .update(Group)
        .set(updateDto)
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
      .delete(Group)
      .where(eq(Group.id, id))
      .returning();

    return deletedGroup;
  }
}
