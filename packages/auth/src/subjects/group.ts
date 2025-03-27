import { z } from 'zod';
import { groupSchema } from '../models/group';

export const groupSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('invite'),
  ]),
  z.union([z.literal('Group'), groupSchema]),
]);

export type GroupSubject = z.infer<typeof groupSubject>;
