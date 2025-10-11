import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const userSchema = z.object({
    name: z.string(),
    email: z.email(),
  });
  const body = await request.json();
  const isValid = userSchema.safeParse(body);
  if (!isValid.success)
    return NextResponse.json({ error: isValid.error.format(), status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(user);
}
