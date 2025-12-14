import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;
  
  let response: NextResponse;

  if (!token && path.startsWith("/dashboard")) {
    response = NextResponse.redirect(new URL("/login", req.url));
   
    response.headers.set("X-Debug-Action", "redirect-no-token");
    response.headers.set("X-Debug-Path", path);
    return response;
  }

  if (token && path === "/login") {
    response = NextResponse.redirect(new URL("/dashboard", req.url));
    response.headers.set("X-Debug-Action", "redirect-has-token");
    return response;
  }

  response = NextResponse.next();
  response.headers.set("X-Debug-Action", "passed");
  response.headers.set("X-Debug-Token", token ? "exists" : "missing");
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};