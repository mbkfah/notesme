import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET() {
  try {
    const notesData = await prisma.notes.findMany({});
    return NextResponse.json({
      status: 200,
      message: "Notes Data Ready to Load",
      data: notesData,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      error,
    });
  }
}
export function POST() {}
export function PATCH() {}
export function DELETE() {}

// export function GET(req) {

// //   return NextResponse.json({ message: "GET NOTES READY " });
// }
