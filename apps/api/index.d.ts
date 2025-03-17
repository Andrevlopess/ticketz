import { UserSelect } from '@ticketz/database';

declare global {
  namespace Express {
    interface Request {
      user: {
        sub: number;
        org: number;
      };
    }
  }
}
