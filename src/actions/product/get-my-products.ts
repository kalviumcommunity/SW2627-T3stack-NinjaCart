"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentSession } from "@/lib/auth-utils";

export async function GetProducts() {
  const session = await getCurrentSession();

  if (!session) {
    throw new Error("You must be logged in.");
  }

  if (session.user.role !== "FARMER") {
    throw new Error("Only farmers can create products.");
  }

  const products = await prisma.product.findMany({
    where: {
      farmerId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return products.map((products)=>({
    id:products.id,
    name: products.name,
    type: products.type,
    price: products.price,
    description: products.description,
    quantity: products.quantity,
    imageURL: products.imageUrl
  }))
}
