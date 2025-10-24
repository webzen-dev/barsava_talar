import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { newPassword } = await req.json();

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json(
        { error: "رمز عبور باید حداقل 6 کاراکتر باشد" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(newPassword, 12);

    await prisma.user.update({
      where: { username: "admin" },
      data: { password: hashedPassword },
    });

    return NextResponse.json({ message: "رمز عبور با موفقیت تغییر کرد" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "خطا در تغییر رمز عبور" },
      { status: 500 }
    );
  }
}
