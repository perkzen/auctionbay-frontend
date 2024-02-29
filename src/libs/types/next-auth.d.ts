import NextAuth, { User } from 'next-auth';
import { LoginResponse as BackendUser } from '@/libs/types/user';

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
