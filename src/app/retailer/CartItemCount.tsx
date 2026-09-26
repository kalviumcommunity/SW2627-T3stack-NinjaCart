"use client";

import { useCart } from "@/context/cartContext";

export default function CartItemCount() {
  const { items } = useCart();

  return items.reduce((total, item) => total + item.quantity, 0);
}
