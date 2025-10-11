import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) return NextResponse.json({ error: "User not found", status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  req: NextResponse,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "No with email not found", status: 400 });

  const updatedUser = await prisma.user.update({
    where: {
      id: user?.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser);
}
