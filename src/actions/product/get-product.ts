"use server";

import { prisma } from "@/lib/prisma";

export async function GetProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    return null;
  }

  return {
    id: product.id,
    name: product.name,
    type: product.type,
    price: product.price.toString(),
    description: product.description,
    quantity: product.quantity,
    imageUrl: product.imageUrl,
  };
}
