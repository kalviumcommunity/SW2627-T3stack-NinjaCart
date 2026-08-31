"use server";

import { prisma } from "@/lib/prisma";
import { getCurrentSession } from "@/lib/auth-utils";

type CreateProductInput = {
  name: string;
  type: string;
  price: number;
  description: string;
  quantity: number;
  imageURL: string;
};

export async function CreateProduct(data: CreateProductInput) {
  const session = await getCurrentSession();

  if (!session) {
    throw new Error("You must be logged in.");
  }

  if (session.user.role !== "FARMER") {
    throw new Error("Only farmers can create products.");
  }

  if (data.price <= 0) {
    throw new Error("Price must be greater than 0.");
  }

  if (data.quantity <= 0) {
    throw new Error("Quantity must be greater than 0.");
  }

  await prisma.product.create({
    data: {
      name: data.name,
      type: data.type,
      price: data.price,
      description: data.description,
      quantity: data.quantity,
      imageUrl: data.imageURL,
      farmerId: session.user.id,
    },
  });

  return { success: true };
}
