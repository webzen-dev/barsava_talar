import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: "OYB26PjR0io8W9lP+31H3YCzmeMKjGkfDpzvkCsQyP4=",
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
