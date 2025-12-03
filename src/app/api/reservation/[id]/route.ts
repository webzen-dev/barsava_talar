import {prisma} from "@/lib/prisma";
import {
  deleteReservationSchema,
  reservationSchema,
} from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest) {
  const idString = req.nextUrl.pathname.split("/").pop();
  const id = Number(idString);

  if (isNaN(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    const body = await req.json();

    const updatedReservation = await prisma.reservation.update({
      where: { id },
      data: body, 
    });

    return NextResponse.json(
      { success: true, data: updatedReservation },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH /api/reservation/[id] error:", error);
    return NextResponse.json(
      {
        message: "Failed to update reservation",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  // const session = await getServerSession(authOptions());
  // if (!session) {
  //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  // }
  const id = await req.nextUrl.pathname.split("/").pop();
  const number = Number(id);
  if (isNaN(number)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }
  try {
    const body = await req.json();
    const parsed = reservationSchema.safeParse(body);
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
    const updateReservation = await prisma.reservation.update({
      where: { id: number },
      data: parsed.data,
    });
    return NextResponse.json(
      { success: true, data: updateReservation },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT /api/contact/[id] error:", error);
    return NextResponse.json(
      {
        message: "Failed to update message",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request: NextRequest) {
  try {
    const idString = request.nextUrl.pathname.split("/").pop();
    const idNumber = Number(idString);

    const parsed = deleteReservationSchema.safeParse({ id: idNumber });
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }
    const deletedReservation = await prisma.reservation.delete({
      where: { id: parsed.data.id },
    });

    return NextResponse.json(
      {
        message: "Reservation deleted successfully",
        reservation: deletedReservation,
      },
      { status: 200 }
    );
  } catch (err: unknown | Error) {
    console.error("DELETE error:", err);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
