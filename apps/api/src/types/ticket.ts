import { TagSelect, TicketSelect } from "@ticketz/database";
import { PublicUser } from "./user";
import z from "zod";


export const TicketFieldsToIncludeSchema = z.array(z.enum(['assignees', 'organization']))
export type TicketFieldsToInclude =  z.infer<typeof TicketFieldsToIncludeSchema>

export interface DetailedTicketSelect extends TicketSelect {
    tags: Pick<TagSelect, 'name'>,
    assignees: PublicUser[]
}