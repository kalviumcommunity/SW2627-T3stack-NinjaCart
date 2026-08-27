import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth-utils";

export default async function FarmerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "FARMER") {
    redirect("/retailer");
  }

  return (
    <div>
      {children}
    </div>
  );
}