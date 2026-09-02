import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: number;
  imageURL: string;
};

export default function ProductCard({
  id,
  name,
  description,
  price,
  quantity,
  imageURL,
}: ProductCardProps) {
  return (
    <Link href={`/retailer/products/${id}`}>
      <div className="cursor-pointer overflow-hidden rounded-xl border transition hover:shadow-md">
        <Image
          src={imageURL}
          alt={name}
          width={500}
          height={300}
          className="h-48 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-lg font-semibold">{name}</h3>

          <p className="mt-2 text-sm text-muted-foreground">{description}</p>

          <p className="mt-4 text-lg font-semibold">₹{price} / kg</p>

          <p className="mt-3 text-sm text-muted-foreground">
            Available: {quantity} kg
          </p>

          <p className="mt-5 text-sm font-medium">View Product →</p>
        </div>
      </div>
    </Link>
  );
}
