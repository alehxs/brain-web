import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Block dead URLs that are polluting Google Search Console and eating Vercel quota.
 * Includes spam bot paths and legacy WordPress URLs from the old site.
 * Returning 410 Gone tells Google to permanently de-index them.
 */

const SPAM_PATTERNS = [
  /^\/\d+$/, // numeric-only paths like /32699919
  /^\/ctg\//, // Korean e-commerce spam like /ctg/search/similarImageSearchResultView/
  /^\/sites\//, // legacy site pages (e.g. /sites/georgia-institute-of-technology)
  /^\/staff(s)?(\/|$)/, // old WordPress staff/staffs pages
  /^\/wp-/, // WordPress paths like /wp-content/, /wp-admin/
  /^\/xmlrpc\.php/, // WordPress XML-RPC endpoint
];

export function proxy(request: NextRequest) {
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
