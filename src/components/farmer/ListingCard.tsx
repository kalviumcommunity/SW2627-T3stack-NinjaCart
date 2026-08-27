import Image from "next/image";
import Link from "next/link";

type ListingCardProps = {
  title: string;
  description: string;
  price: number;
  soldQuantity: number;
  remainingQuantity: number;
  image: string;
  href: string;
};

export default function ListingCard({
  title,
  description,
  price,
  soldQuantity,
  remainingQuantity,
  image,
  href,
}: ListingCardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer overflow-hidden rounded-lg border transition hover:shadow-md">
        
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="h-48 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>

          <p className="mt-4 text-lg font-semibold">
            ₹{price} / kg
          </p>

          <div className="mt-4 flex justify-between border-t pt-4 text-sm">
            <div>
              <p className="text-muted-foreground">Sold</p>
              <p className="font-semibold">{soldQuantity} kg</p>
            </div>

            <div>
              <p className="text-muted-foreground">Remaining</p>
              <p className="font-semibold">{remainingQuantity} kg</p>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}