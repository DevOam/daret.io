import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rediriger /privacy vers /privacy-policy
  if (pathname === '/privacy') {
    return NextResponse.redirect(new URL('/privacy-policy', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/privacy'],
};
