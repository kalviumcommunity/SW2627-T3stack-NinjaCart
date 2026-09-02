import { redirect } from "next/navigation";

import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import ForBoth from "@/components/landing/for-both";
import WhyNinjacart from "@/components/landing/why-ninjacart";
import CTA from "@/components/landing/cta";
import { getCurrentSession } from "@/lib/auth-utils";

export default async function Home() {
  const session = await getCurrentSession();

  if (session?.user.role === "FARMER") {
    redirect("/farmer");
  }

  if (session?.user.role === "RETAILER") {
    redirect("/retailer");
  }

  return (
    <>
      <Hero />
      <HowItWorks />
      <ForBoth />
      <WhyNinjacart />
      <CTA />
    </>
  );
}