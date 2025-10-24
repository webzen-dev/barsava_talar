import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcryptjs";
import { type JWT } from "next-auth/jwt";
interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}
export const authOptions = (): NextAuthOptions => ({
  providers: [
    CredentialsProvider({
      id: "admin-credentials",

      name: "Login",

      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials?.username || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });
        if (!user || !(await compare(credentials.password, user.password!))) {
          return null;
        }
        return {
          id: user.id.toString(),
          username: user.username,
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/",
    error: "/",
    signOut: "/",
  },
  callbacks: {
    async jwt(token: JWT, user?: User): Promise<JWT> {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
          // token.role = (user as User).role;
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          role: token.role,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
});
