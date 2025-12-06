// import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "@/lib/prisma";

export const memberAuthProvider = CredentialsProvider({
  name: "Member Login",
  credentials: {
    phone_number: { label: "Phone Number", type: "text" },
  },
  async authorize(credentials) {
    if (!credentials?.phone_number) return null;

    let member = await prisma.members.findUnique({
      where: { phoneNumber: credentials.phone_number },
    });

    if (!member) {
      member = await prisma.members.create({
        data: { phoneNumber: credentials.phone_number },
      });
    }

    return {
      id: member.id.toString(),
      phoneNumber: member.phoneNumber,
      role: "member",
    };
  },
});
