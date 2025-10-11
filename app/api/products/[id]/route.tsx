import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!product)
    return NextResponse.json({ error: "No product found", status: 400 });

  return NextResponse.json(product);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate req with zod

  const body = await req.json();
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!product) return NextResponse.json({ error: "No product found", status: 400 });

  const updatedProduct = await prisma.product.update({
    where: {
      id: product.id,
    },
    data: {
      name: body.name,
      price: body.price
    },
  });

  return NextResponse.json(updatedProduct)
}
