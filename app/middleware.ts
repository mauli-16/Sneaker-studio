import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log("❌ NO TOKEN - Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }
   if (token && req.nextUrl.pathname === "/login") {
     console.log("✅ HAS TOKEN on /login - Redirecting to /dashboard");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  console.log("✅ Middleware passed - continuing");
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login"
  ],
};
