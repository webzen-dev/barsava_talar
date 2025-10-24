import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const registerSchema = z.object({
  phone_number: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const existing = await prisma.members.findUnique({
      where: { phoneNumber: parsed.data.phone_number },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Phone number already registered" },
        { status: 400 }
      );
    }

    const newMember = await prisma.members.create({
      data: { phoneNumber: parsed.data.phone_number },
    });


    return NextResponse.json({ data: newMember, status: 201 });
  } catch (e) {
    return NextResponse.json(
      { message: (e as Error).message },
      { status: 500 }
    );
  }
}
