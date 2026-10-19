// middleware.ts

//import { verifyToken } from '@/lib/auth';
import { JWTPayload } from 'jose';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('mock_token')?.value;

  const { pathname } = request.nextUrl;

  let tokenValue: boolean = false;
  if (token) {
    tokenValue = await verifyToken(token) ? true : false;
  }


  // Protect /your-goals routes
  if (pathname.startsWith('/your-goals') && !tokenValue) {
    return NextResponse.redirect(new URL('/login-page', request.url));
  }

  // Redirect logged-in users away from /login
  if (pathname === '/login-page' && tokenValue) {
    return NextResponse.redirect(new URL('/your-goals', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/your-goals/:path*', '/login-page'],

};