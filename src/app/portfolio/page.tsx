import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PortfolioGallery from "./portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio | Elevate Digital",
  description: "Explore our latest projects and case studies.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Hero title="Our Portfolio" />
      <PortfolioGallery />
    </main>
  );
}
