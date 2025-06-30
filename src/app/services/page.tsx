import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Elevate Digital",
  description: "Explore our full range of digital services and pricing packages.",
};

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    description: "Modern responsive websites built for your business.",
  },
  {
    title: "Mobile Apps",
    href: "/services/mobile-apps",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="12" height="20" x="6" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    description: "iOS and Android applications users love.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12l18-9v18L3 12z" />
      </svg>
    ),
    description: "Strategies that grow your audience and brand.",
  },
  {
    title: "Cloud Solutions",
    href: "/services/cloud-solutions",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 15a4 4 0 0 1 4-4 5 5 0 0 1 9.9-1A3.5 3.5 0 0 1 21 13.5 3.5 3.5 0 0 1 17.5 17H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    description: "Infrastructure and DevOps for scale and reliability.",
  },
];

const workflow = [
  {
    title: "Discovery",
    description: "We collaborate to understand goals and requirements.",
  },
  {
    title: "Design",
    description: "Our team crafts user-centric wireframes and prototypes.",
  },
  {
    title: "Development",
    description: "Agile development brings your vision to life.",
  },
  {
    title: "Deploy",
    description: "Launch, monitor and iterate for ongoing success.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$1,999",
    features: ["Single landing page", "Basic analytics", "Email support"],
  },
  {
    name: "Growth",
    price: "$4,999",
    features: ["Multi-page site or app", "SEO optimization", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Complex integrations",
      "Dedicated project team",
      "SLA & ongoing maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Hero title="Our Services" />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center">
                <div className="mx-auto mb-3 h-12 w-12 text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <Link href={service.href} className="mt-3 inline-block text-sm text-blue-600 hover:underline">
                  Learn More
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-950">
        <Container>
          <h2 className="text-center text-3xl font-bold">Our Process</h2>
          <ol className="mx-auto mt-8 grid max-w-3xl gap-8 sm:grid-cols-2 md:grid-cols-4">
            {workflow.map((step, idx) => (
              <li key={step.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  {idx + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold">Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricing.map((tier) => (
              <Card key={tier.name} className="text-center">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {tier.price}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Button variant="primary" className="mt-6">
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
