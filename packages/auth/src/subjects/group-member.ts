
import { groupMemberSchema } from '../models/group-member';
import { z } from 'zod';

export const groupMemberSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('read'),
    z.literal('create'),
    z.literal('delete'),
  ]),
  z.union([z.literal('GroupMembers'), groupMemberSchema]),
]);

export type GroupMemberSubject = z.infer<typeof groupMemberSubject>;
