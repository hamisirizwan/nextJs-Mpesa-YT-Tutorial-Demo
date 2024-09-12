// export { auth as middleware } from "@/auth";


import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import authConfig from "./auth.config";


const protectedRoutes = ["/account"];
const authRoutes = ["/login", "/register"]

 const { auth } = NextAuth(authConfig)

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!session && isProtected) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  const isAuthPages= authRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

 if (session && isAuthPages) {
    const absoluteURL = new URL("/account/dashboard", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};