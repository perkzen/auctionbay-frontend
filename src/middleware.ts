import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/auctions/:path*', '/profile/:path*'],
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
