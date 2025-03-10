import { Inject, Injectable } from '@nestjs/common';
// import { DrizzleAsyncProvider } from './drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
// import * as schema from './drizzle/schema/users';

@Injectable()
export class AppService {
  constructor(
   
  ) {}

  getRoot(): string {
    return 'This is the root of the ticketz api!';
  }
}
