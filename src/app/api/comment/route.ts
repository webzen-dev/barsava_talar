import { CommentsScheme } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "../../../../generated/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsedData = CommentsScheme.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json(
        { errors: parsedData.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        fullName: body.fullName,
        phoneNumber: body.phoneNumber,
        title: body.title,
        message: body.message,
        isRead: body.isRead ?? false,
      },
    });

    return NextResponse.json({ comment }, { status: 201 });
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Prisma.PrismaClientKnownRequestError,
    });
  }
}

export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      select: {
        id: true,
        fullName: true,
        title: true,
        message: true,
      },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Prisma.PrismaClientKnownRequestError,
    });
  }
}
