"use server";

import { prisma } from "@/lib/prisma";

export async function GetProduct() {
  const product = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return product.map((product) => ({
    id: product.id,
    name: product.name,
    type: product.type,
    price: product.price.toString(),
    description: product.description,
    quantity: product.quantity,
    imageUrl: product.imageUrl,
  }));
}
