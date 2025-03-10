
import { Module } from '@nestjs/common';
import {DrizzleAsyncProvider, drizzleProvider} from "@ticketz/database"

@Module({
  providers: [...drizzleProvider],
  exports: [DrizzleAsyncProvider],
})
export class DrizzleModule {}
