import { prisma } from "@/lib/prisma";
import { CommentsScheme } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "../../../../../generated/prisma/client";

export async function PUT(request: NextRequest) {
  const getUrlId = request.nextUrl.pathname.split("/").pop();
  const id = Number(getUrlId);
  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }
  try {
    const body = await request.json();
    const parsed = CommentsScheme.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const updateComments = await prisma.comment.update({
      where: { id: id },
      data: parsed.data,
    });

    return NextResponse.json(
      { success: true, data: updateComments },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Prisma.PrismaClientKnownRequestError,
    });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const getUrlId = request.nextUrl.pathname.split("/").pop();
    const id = Number(getUrlId);

    if (isNaN(id)) {
      return NextResponse.json({ message: "invalid Id" }, { status: 400 });
    }

    const deletedComment = await prisma.comment.delete({
      where: { id: id },
    });

    return NextResponse.json(
      { message: "comment deleted successfully", deletedComment },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Prisma.PrismaClientKnownRequestError,
    });
  }
}

export async function GET(request: NextRequest) {
  try {
    const getUrlId = request.nextUrl.pathname.split("/").pop();
    const id = Number(getUrlId);

    if (isNaN(id)) {
      return NextResponse.json({ message: "invalid Id" }, { status: 400 });
    }

    const getComment = await prisma.comment.findMany({
      where: { id: id },
    });

    return NextResponse.json({ data: getComment }, { status: 200 });
  } catch (err) {
    return NextResponse.json({
      error: err instanceof Prisma.PrismaClientKnownRequestError,
    });
  }
}
