"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateProduct } from "@/actions/product/create-product";
import type { SubmitEvent } from "react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await CreateProduct({
        name,
        type,
        price: Number(price),
        quantity: Number(quantity),
        description,
        imageURL,
      });
      router.push("/farmer/products");
    } catch (error) {
      console.error("Failed to create product: ", error);

      setError(
        error instanceof Error ? error.message : "failed to create product.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-bold">Create Product</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="font-medium">Product Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 w-full rounded-md border px-3 py-2"
            placeholder="e.g. Tomatoes"
          />
        </div>

        <div>
          <label className="font-medium">Product Type</label>

          <Select value={type} onValueChange={(value) => setType(value ?? "")}>
            <SelectTrigger className="mt-2 w-full">
              <SelectValue placeholder="Select product type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="vegetable">Vegetable</SelectItem>
              <SelectItem value="fruit">Fruit</SelectItem>
              <SelectItem value="grain">Grain</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="font-medium">Price</label>

          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-2 w-full rounded-md border px-3 py-2"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="font-medium">Quantity</label>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="mt-2 w-full rounded-md border px-3 py-2"
            placeholder="Enter quantity"
          />
        </div>

        <div>
          <label className="font-medium">Description</label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="mt-2 w-full rounded-md border px-3 py-2"
            placeholder="Describe your product"
          />
        </div>

        <div>
          <label className="font-medium">Image URL</label>

          <input
            type="url"
            value={imageURL}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="mt-2 w-full rounded-md border px-3 py-2"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Product"}
        </Button>
      </form>
    </main>
  );
}
