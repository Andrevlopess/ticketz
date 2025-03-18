import {
  MembershipSelect,
  OrganizationSelect,
  UserSelect,
} from '@ticketz/database';

declare global {
  namespace Express {
    interface Request {
      user: {
        sub: number;
        org: number;
      };
      getUserMembership: (orgId: number) => Promise<{
        membership: MembershipSelect;
        organization: OrganizationSelect;
      }>;
      getCurrentUserId: () => Promise<number>;
    }
  }
}
