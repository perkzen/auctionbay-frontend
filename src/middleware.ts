import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { Route } from '@/routes';

export const config = {
  matcher: [Route.AUCTIONS, Route.PROFILE],
};

export default withAuth(
  async (_req, _res) => {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token }) {
        return !!token;
      },
    },
  }
);
