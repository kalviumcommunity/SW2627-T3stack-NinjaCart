import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border">
      <Link href="/" className="text-2xl font-bold">
        NinjaCart
      </Link>

      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-6">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#working">How it works</a>
          </li>
        </ul>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
