// /app/api/auth/[...nextauth]/route.ts
import { authOptions as adminAuthOptions } from "@/lib/auth";
import { memberAuthProvider } from "@/lib/register";
import NextAuth from "next-auth"
const adminOptions = adminAuthOptions();

const combinedAuthOptions = {
  ...adminOptions,
  providers: [...adminOptions.providers, memberAuthProvider],
};

const handler = NextAuth(combinedAuthOptions);

export { handler as GET, handler as POST };
