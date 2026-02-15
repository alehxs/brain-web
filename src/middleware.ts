import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Block spam URLs that are polluting Google Search Console.
 * These are fake paths created by external spam bots linking to our domain
 * (random numeric IDs and Korean e-commerce paths).
 * Returning 410 Gone tells Google to permanently de-index them.
 */

const SPAM_PATTERNS = [
  /^\/\d+$/, // numeric-only paths like /32699919
  /^\/ctg\//, // Korean e-commerce spam like /ctg/search/similarImageSearchResultView/
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(null, { status: 410 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run middleware on all paths except Next.js internals and static assets.
     */
    "/((?!_next/|favicon\\.ico|.*\\.).*)",
  ],
};
