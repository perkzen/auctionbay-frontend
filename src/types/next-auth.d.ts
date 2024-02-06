import NextAuth, { User } from 'next-auth';
import { User as BackendUser } from '@/models/user';

declare module 'next-auth' {
  interface User extends BackendUser {}

  interface Session {
    user: User;
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    email: string;
    sub: string;
    iat: number;
    exp: number;
    user: User;
  }
}
