import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Digital Marketing | Elevate Digital",
  description: "Campaigns that amplify your brand online.",
};

export default function DigitalMarketingPage() {
  const benefits = [
    "Search engine optimization",
    "Pay-per-click advertising",
    "Content & social strategy",
    "Analytics and conversion tracking",
  ];

  return (
    <main>
      <Hero title="Digital Marketing" subtitle="Grow Your Audience" />
      <section className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold">What We Offer</h2>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b}
                className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button variant="primary">Start Your Campaign</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
