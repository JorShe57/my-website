import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Web Development | Elevate Digital",
  description: "Custom websites that drive results.",
};

export default function WebDevelopmentPage() {
  const benefits = [
    "Custom responsive design",
    "SEO-friendly architecture",
    "Performance optimization",
    "E-commerce integration",
  ];

  return (
    <main>
      <Hero title="Web Development" subtitle="Build Your Online Presence" />
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
            <Button variant="primary">Start Your Project</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
