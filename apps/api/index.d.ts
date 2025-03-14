import { UserSelect } from "@ticketz/database";

declare global {
    namespace Express {
      interface User {
        sub: number
      }
    }
  }