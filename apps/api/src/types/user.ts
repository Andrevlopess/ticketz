import { UserSelect } from "@ticketz/database";

export type PublicUser = Pick<UserSelect, 'id' | 'name' |'email' | 'photoUrl' | 'jobTitle' | "phone"> 