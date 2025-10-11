import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(req: NextResponse) {
  const productSchema = z.object({
    name: z.string(),
    price: z.number(),
  });

  const body = await req.json();

  const isValid = productSchema.safeParse(body);
  if (!isValid.success)
    return NextResponse.json({ error: isValid.error.format(), status: 400 });

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(product);
}
