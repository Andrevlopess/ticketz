import {
  MembershipSelect,
  OrganizationSelect,
  UserSelect,
} from '@ticketz/database';
import { AccessTokenPayload } from 'src/auth/auth.service';

declare global {
  namespace Express {
    interface Request {
      user: {
        sub: number;
        role: Role;
      };
      organization: OrganizationSelect,
      accessToken: AccessTokenPayload;
      // getUserMembership: (slug: string) => Promise<{
      //   membership: MembershipSelect;
      //   organization: OrganizationSelect;
      // }>;
      // getCurrentUser: () => Promise<AccessTokenPayload>;
    }
  }
}
