import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import type { Stat } from "@/components/sections/Stats";
import Team, { TeamMember } from "@/components/sections/Team";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  FloatingOrbs,
  SectionDivider,
  GradientMesh,
  GeometricBackground,
} from "@/components/ui/DecorativeBackgrounds";

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
    {
      title: "Experienced Team",
      description: "Multidisciplinary experts with years of industry experience",
      icon: "👥",
    },
    {
      title: "Agile Approach",
      description: "Client-centric methodology with rapid iteration cycles",
      icon: "⚡",
    },
    {
      title: "Proven Success",
      description: "Track record of delivering results that exceed expectations",
      icon: "🏆",
    },
    {
      title: "Cutting-edge Tech",
      description: "Latest technologies and industry best practices",
      icon: "🚀",
    },
    {
      title: "Transparent Communication",
      description: "Clear, honest communication throughout every project",
      icon: "💬",
    },
    {
      title: "Long-term Partnerships",
      description: "Building lasting relationships beyond project completion",
      icon: "🤝",
    },
  ];

  const story = [
    {
      year: "2015",
      text:
        "Founded with a passion for digital innovation and helping businesses transform.",
      highlight: true,
    },
    {
      year: "2017",
      text: "Launched our first enterprise platform, establishing our reputation in the market.",
    },
    { year: "2020", text: "Expanded globally and grew our team to meet increasing demand." },
    {
      year: "2023",
      text: "Recognized as a leading digital agency with industry awards and accolades.",
      highlight: true,
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and creative solutions.",
      icon: "💡",
    },
    {
      title: "Quality",
      description: "Every project meets our high standards for excellence.",
      icon: "✨",
    },
    {
      title: "Collaboration",
      description: "We work closely with clients as true partners.",
      icon: "🤝",
    },
    {
      title: "Impact",
      description: "We measure success by the positive results we create.",
      icon: "📈",
    },
  ];

  return (
    <main className="overflow-hidden">
      <Hero
        variant="gradient"
        title="About Elevate Digital"
        subtitle="Our Mission"
        description="We empower businesses to thrive by transforming ideas into impactful digital experiences that drive real results."
        size="lg"
      />

      {/* Stats Section */}
      <section className="relative py-16 bg-gray-900 text-white">
        <GeometricBackground />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 lg:text-4xl animate-scale-in">
                    {stat.value}+
                  </div>
                  <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="wave" className="text-gray-900" />

      {/* Our Story Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900" id="our-story">
        <FloatingOrbs />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From humble beginnings to industry recognition, here&apos;s how we&apos;ve grown.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            {story.map((event, index) => (
              <AnimatedSection key={event.year} delay={index * 0.2}>
                <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-white ${event.highlight ? 'bg-yellow-400' : 'bg-blue-500'} shadow-lg`}></div>
                  </div>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card
                      variant={event.highlight ? 'premium' : 'default'}
                      className="hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`text-2xl font-bold mb-2 ${event.highlight ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-600 dark:text-blue-400'}`}>{event.year}</div>
                      <p className="text-gray-700 dark:text-gray-300">{event.text}</p>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <GradientMesh />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card
                  variant="feature"
                  className="text-center h-full hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                What sets us apart in the digital landscape.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((diff, index) => (
              <AnimatedSection key={diff.title} delay={index * 0.1}>
                <Card
                  variant="default"
                  className="text-center h-full group hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {diff.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{diff.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="curve" className="text-gray-50 dark:text-gray-800" />

      {/* Team Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-950">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The talented individuals behind our success.
              </p>
            </div>
          </AnimatedSection>

          <Team members={team} className="mt-8" />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <FloatingOrbs />
        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold lg:text-4xl mb-6">
              Ready to Work <span className="text-yellow-300">Together?</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how we can help transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
              <Button variant="glass" size="xl" className="shadow-glow">
                Start a Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
