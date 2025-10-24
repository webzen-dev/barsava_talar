// import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { reservationSchema } from "@/lib/validation/schema";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // const session = await getServerSession(authOptions());
    // if (!session) {
    //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    // }

    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    const newReservation = await prisma.reservation.create({
      data: {
        ...parsed.data,
      },
    });
    return NextResponse.json({
      success: true,
      reservation: newReservation,
      status: 200,
    });
  } catch (error) {
    console.error("Reservation POST error:", error);
    return NextResponse.json(
      {
        error: "Server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // const session = await getServerSession(authOptions());
    // if (!session) {
    //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    // }
    // const reservations = await prisma.reservation.findMany();
    const reservations = await prisma.reservation.findMany({
      where: { memberId: 2 },
    });

    return NextResponse.json(reservations);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Server error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
// pasport
