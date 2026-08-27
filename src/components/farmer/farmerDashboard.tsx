import Link from "next/link";
import { Button } from "@/components/ui/button";
import ListingCard from "./ListingCard";

export default function FarmerDashboard() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Farmer Dashboard
        </h1>

        <Link href="/farmer/products/new">
          <Button>
            + Add Listing
          </Button>
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-semibold">
          Your Listings
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <ListingCard
            title="Tomatoes"
            description="Fresh farm tomatoes"
            price={40}
            soldQuantity={25}
            remainingQuantity={75}
            image="/tomatoes.jpg"
            href="/farmer/products"
          />

          <ListingCard
            title="Potatoes"
            description="Fresh farm potatoes"
            price={30}
            soldQuantity={40}
            remainingQuantity={60}
            image="/potatoes.jpg"
            href="/farmer/products"
          />

          <ListingCard
            title="Onions"
            description="Fresh farm onions"
            price={35}
            soldQuantity={30}
            remainingQuantity={70}
            image="/onions.jpg"
            href="/farmer/products"
          />

        </div>
      </section>

    </main>
  );
}