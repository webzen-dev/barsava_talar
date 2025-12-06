import {prisma} from "@/lib/prisma";
import { ContactUsScheme } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";

    export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json();

        const parsed = ContactUsScheme.safeParse(body);
        if (!parsed.success) {
        return NextResponse.json(
            { errors: parsed.error.flatten().fieldErrors },
            { status: 400 }
        );
        }
  const result = await prisma.contactUs.create({
      data: parsed.data,
    });

    return NextResponse.json({ data: result }, { status: 201 });
    } catch (e) {
        return NextResponse.json({ error: e });
    }
    };

export const GET = async () => {
  try {
    const res = await prisma.contactUs.findMany();
    return NextResponse.json({ data: res });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
};
