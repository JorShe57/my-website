import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cloud Solutions | Elevate Digital",
  description: "Scalable infrastructure and DevOps services.",
};

export default function CloudSolutionsPage() {
  const benefits = [
    "Infrastructure as Code",
    "CI/CD automation",
    "Scalable hosting on major clouds",
    "24/7 monitoring & support",
  ];

  return (
    <main>
      <Hero title="Cloud Solutions" subtitle="Scale With Confidence" />
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
