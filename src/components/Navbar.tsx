"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 border">
      <Link href="/" className="text-2xl font-bold">
        NinjaCart
      </Link>

      <div className="flex items-center gap-10">
        {!isPending && !session ? (
          <>
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
          </>
        ) : (
          !isPending && (
            <Button onClick={handleSignOut}>
              Sign Out
            </Button>
          )
        )}
      </div>
    </nav>
  );
}