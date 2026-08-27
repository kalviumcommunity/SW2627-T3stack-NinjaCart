"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState<"FARMER" | "RETAILER">("RETAILER");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      role,
    });

    if (error) {
      console.error("Signup error:", error);
      setError(error.message || "Unable to create account.");
      setLoading(false);
      return;
    }

    if (data.user.role === "FARMER") {
      router.push("/farmer");
    } else {
      router.push("/retailer");
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold">Create an Account</h1>

        <p className="mt-2 text-center text-muted-foreground">
          Join NinjaCart today.
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="font-medium">
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-medium">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="font-medium">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <p className="font-medium">I am a:</p>

            <div className="mt-2 flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="FARMER"
                  checked={role === "FARMER"}
                  onChange={() => setRole("FARMER")}
                />
                Farmer
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="RETAILER"
                  checked={role === "RETAILER"}
                  onChange={() => setRole("RETAILER")}
                />
                Retailer
              </label>
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
