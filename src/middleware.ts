//export {auth as default} from "@/libs/auth";

// This middleware will be called for every request
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default function middleware(request: NextRequest) {
  return NextResponse.next();
}
