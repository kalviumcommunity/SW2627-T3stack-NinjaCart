import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth-utils";

export default async function RetailerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getCurrentSession();

  if (!session) {
    redirect("/login");
  }

  if (session.user.role !== "RETAILER") {
    redirect("/farmer");
  }

  return (
    <div>
      {children}
    </div>
  );
}