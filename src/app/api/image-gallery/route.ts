import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";
import { imageGallerySchema } from "@/lib/validation/schema";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const title = form.get("title") as string;
    const file = form.get("file") as File;
    const type = (form.get("type") as string)?.toLowerCase();

    const formDataObj = {
      title: form.get("title"),
      media: form.get("file"),
      type,
    };
    const parsed = imageGallerySchema.safeParse(formDataObj);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.message },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const ext = file.name.split(".").pop() || "bin";
    const fileName = `${Date.now()}.${ext}`;
    // const fileName = `${Date.now()}_${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    const arrayBuffer = await file.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

    const media = await prisma.media.create({
      data: {
        title,
        url: `/uploads/${fileName}`,
        type: type === "IMAGE" ? "IMAGE" : "VIDEO",
      },
    });

    return NextResponse.json(
      { message: "Media uploaded", media },
      { status: 201 }
    );
  } catch (e: unknown) {
    console.error(e);
    return NextResponse.json(
      { error: e || "Something went wrong" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const res = await prisma.media.findMany();
    return NextResponse.json({ data: res });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
