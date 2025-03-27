
import { SetMetadata } from '@nestjs/common';
import { Role } from '@ticketz/database';

export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: string[]) => SetMetadata(PERMISSIONS_KEY, permissions);
