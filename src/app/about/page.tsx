import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Stats, { Stat } from "@/components/sections/Stats";
import Team, { TeamMember } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "About Us | Elevate Digital",
  description:
    "Discover the mission, story and talented team behind Elevate Digital.",
};

const stats: Stat[] = [
  { label: "Projects Completed", value: 120 },
  { label: "Years Experience", value: 10 },
  { label: "Team Members", value: 8 },
  { label: "Satisfied Clients", value: 95 },
];

const team: TeamMember[] = [
  {
    name: "Alex Johnson",
    title: "CEO",
    bio: "Visionary leader focused on delivering digital excellence.",
    image: "https://placehold.co/200x200",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sara Kim",
    title: "CTO",
    bio: "Architecting scalable solutions with cutting-edge tech.",
    image: "https://placehold.co/200x200",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "David Lee",
    title: "Lead Developer",
    bio: "Passionate about clean code and great user experiences.",
    image: "https://placehold.co/200x200",
    social: { github: "#" },
  },
  {
    name: "Emily Chen",
    title: "UI/UX Designer",
    bio: "Designing intuitive interfaces that delight users.",
    image: "https://placehold.co/200x200",
    social: { twitter: "#" },
  },
  {
    name: "Michael Brown",
    title: "Marketing Strategist",
    bio: "Crafting campaigns that connect brands with audiences.",
    image: "https://placehold.co/200x200",
  },
  {
    name: "Olivia Davis",
    title: "Project Manager",
    bio: "Keeping projects on track and clients happy.",
    image: "https://placehold.co/200x200",
    social: { linkedin: "#" },
  },
];

export default function AboutPage() {
  const differentiators = [
    "Experienced multidisciplinary team",
    "Client-centric agile approach",
    "Proven track record of success",
    "Cutting-edge technologies",
    "Transparent communication",
    "Focus on long-term partnerships",
  ];

  const story = [
    { year: "2015", text: "Founded with a passion for digital innovation." },
    { year: "2017", text: "Launched our first enterprise platform." },
    { year: "2020", text: "Expanded globally and grew our team." },
    { year: "2023", text: "Recognized as a leading digital agency." },
  ];

  return (
    <main>
      <Hero title="About Elevate Digital" subtitle="Our Mission">
        We empower businesses to thrive by transforming ideas into impactful
        digital experiences.
      </Hero>

      <section className="py-16" id="our-story">
        <Container>
          <h2 className="text-center text-3xl font-bold">Our Story</h2>
          <ol className="mx-auto mt-8 max-w-2xl border-l border-gray-200 dark:border-gray-700 relative">
            {story.map((event) => (
              <li key={event.year} className="ml-6 mb-10">
                <span className="absolute -left-3 mt-1 h-6 w-6 rounded-full bg-blue-600" />
                <time className="mb-1 text-sm font-semibold leading-none text-gray-600 dark:text-gray-300">
                  {event.year}
                </time>
                <p className="text-gray-700 dark:text-gray-400">{event.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <Container>
          <h2 className="text-center text-3xl font-bold">Why Choose Us</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {differentiators.map((diff) => (
              <li
                key={diff}
                className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                {diff}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <Stats stats={stats} />
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <Container>
          <h2 className="text-center text-3xl font-bold">Meet the Team</h2>
          <Team members={team} className="mt-8" />
        </Container>
      </section>
    </main>
  );
}
