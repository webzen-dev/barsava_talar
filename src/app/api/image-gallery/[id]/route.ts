import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(request: NextRequest) {
  try {
    const number = request.nextUrl.pathname.split("/").pop();
    const ID = Number(number);

    if (isNaN(ID)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const media = await prisma.media.delete({
      where: { id: ID },
    });

    const filePath = path.join(process.cwd(), "public", media.url);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    return NextResponse.json({
      message: "Media successfully deleted.",
      mediaId: ID,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to delete media" }, { status: 500 });
  }
}
