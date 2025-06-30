"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectFilter from "@/components/portfolio/ProjectFilter";
import CaseStudyPreview from "@/components/portfolio/CaseStudyPreview";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Scalable storefront built with modern frameworks.",
    image: "https://placehold.co/600x400",
    category: "Web Development",
  },
  {
    title: "Social App",
    description: "Connect users worldwide with real-time chat.",
    image: "https://placehold.co/600x400",
    category: "Mobile Apps",
  },
  {
    title: "SEO Campaign",
    description: "Boosted organic traffic for a growing brand.",
    image: "https://placehold.co/600x400",
    category: "Digital Marketing",
  },
  {
    title: "Cloud Migration",
    description: "Moved legacy systems to a modern cloud stack.",
    image: "https://placehold.co/600x400",
    category: "Cloud Solutions",
  },
];

const caseStudies = [
  {
    title: "Retailer Redesign",
    result: "Sales increased 50% after launch",
    imageBefore: "https://placehold.co/300x200?text=Before",
    imageAfter: "https://placehold.co/300x200?text=After",
  },
  {
    title: "App Performance",
    result: "Reduced load times by 70%",
    imageBefore: "https://placehold.co/300x200?text=Old",
    imageAfter: "https://placehold.co/300x200?text=New",
  },
];

export default function PortfolioGallery() {
  const categories = ["All", "Web Development", "Mobile Apps", "Digital Marketing", "Cloud Solutions"];
  const [filter, setFilter] = useState<string>("All");
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <section className="py-16">
        <Container>
          <ProjectFilter categories={categories} active={filter} onChange={setFilter} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <ProjectCard {...p} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-gray-50 py-16 dark:bg-gray-950">
        <Container>
          <h2 className="text-center text-3xl font-bold">Case Studies</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.1}>
                <CaseStudyPreview {...cs} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="primary">Discuss Your Project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
