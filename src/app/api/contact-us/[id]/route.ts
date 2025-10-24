import prisma from "@/lib/prisma";
// import { ContactUsScheme } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  try {
    const id = await request.nextUrl.pathname.split("/").pop();
    const number = Number(id);
    if (!id || isNaN(number)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }
    const res = await prisma.contactUs.delete({
      where: { id: number },
    });
    return NextResponse.json({ data: res });
  } catch (e) {
    return NextResponse.json({ message: e });
  }
};
// export const PUT = async (request: NextRequest) => {
//   try {
//     const id = await request.nextUrl.pathname.split("/").pop();
//     const number = Number(id);
//     const body = await request.json();
//     const parsed = ContactUsScheme.safeParse(body);

//     if (!id || isNaN(number)) {
//       return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
//     }
//     if (!parsed.success) {
//       return NextResponse.json(
//         { message: parsed.error.message },
//         { status: 400 }
//       );
//     }
//     const res = await prisma.contactUs.update({
//       where: { id: number },
//       data: parsed.data,
//     });
//     return NextResponse.json({ data: res });
//   } catch (e) {
//     return NextResponse.json({ message: e });
//   }
// };

// export async function PATCH(
//   req: NextRequest,
//   context: { params: { id: string } }
// ) {
//   const { params } = context;
//   const { id } = params;

//   try {
//     const body = await req.json();
//     const { isRead } = body;

//     if (typeof isRead !== "boolean") {
//       return NextResponse.json(
//         { error: "isRead باید boolean باشد" },
//         { status: 400 }
//       );
//     }

//     const updated = await prisma.contactUs.update({
//       where: { id: Number(id) },
//       data: { isRead },
//     });

//     return NextResponse.json({ data: updated });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { error: "خطا در بروزرسانی پیام" },
//       { status: 500 }
//     );
//   }
// }
