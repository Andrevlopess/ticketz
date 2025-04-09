import { z } from 'zod';
import { groupSchema } from '../models/group';

export const groupSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('read'),
    z.literal('update'),
    z.literal('create'),
    z.literal('delete'),
    // z.literal('add_members'),
    // z.literal('remove_members'),
  ]),
  z.union([z.literal('Group'), groupSchema]),
]);

export type GroupSubject = z.infer<typeof groupSubject>;
