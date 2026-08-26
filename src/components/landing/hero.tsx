import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-10 py-20">
      <h1 className="font-bold text-5xl tracking-tight py-5">
        FROM FARM TO RETAIL, MADE SIMPLE.
      </h1>
      <p className="max-w-3xl text-center py-5">
        Connect farmers and retailers through a simple marketplace.
      </p>

      <div className="flex items-center gap-4">
        <Link href="/signup">
          <Button>Get Started</Button>
        </Link>
        <a href="#about">
          <Button>Learn More</Button>
        </a>
      </div>
    </section>
  );
}
