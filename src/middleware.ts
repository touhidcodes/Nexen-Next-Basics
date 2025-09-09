import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // get JWT from cookie
  const { pathname } = req.nextUrl;

  // If user is already logged in and tries to access login/signup, allow or redirect
  if ((pathname === "/login" || pathname === "/signup") && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Protect /todos routes
  if (pathname.startsWith("/todos") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Specify the routes this middleware should run on
export const config = {
  matcher: ["/todos/:path*", "/login", "/signup"],
};
