"use client";

import { useState } from "react";

type ProductPurchaseProps = {
  productId: string;
  price: string;
  availableQuantity: number;
};

export default function ProductPurchase({
  productId,
  price,
  availableQuantity,
}: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < availableQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = Number(price) * quantity;

  return (
    <div className="mt-8">
      <p className="text-sm font-medium">Quantity</p>

      <div className="mt-2 flex items-center gap-4">
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity === 1}
          className="rounded-lg border px-4 py-2 disabled:opacity-50"
        >
          −
        </button>

        <span className="text-lg font-medium">{quantity} kg</span>

        <button
          type="button"
          onClick={increaseQuantity}
          disabled={quantity === availableQuantity}
          className="rounded-lg border px-4 py-2 disabled:opacity-50"
        >
          +
        </button>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Total: ₹{totalPrice.toFixed(2)}
      </p>

      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
      >
        Add to Cart
      </button>
    </div>
  );
}
