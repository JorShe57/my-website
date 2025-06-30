import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Hero from "@/components/sections/Hero";
import {
  GeometricBackground,
  FloatingOrbs,
  SectionDivider,
  GradientMesh,
} from "@/components/ui/DecorativeBackgrounds";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Modern websites built for scale and performance.",
      href: "/services/web-development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      description: "iOS and Android applications that users love.",
      href: "/services/mobile-apps",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      description: "Strategies that grow your audience and brand reach.",
      href: "/services/digital-marketing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Cloud Solutions",
      description: "Infrastructure and DevOps for scale and reliability.",
      href: "/services/cloud-solutions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004-4V9a5 5 0 1110 0v2a4 4 0 004 4M9 17h6" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance",
      icon: "⚡",
    },
    {
      title: "Mobile First",
      description: "Responsive design that works everywhere",
      icon: "📱",
    },
    {
      title: "SEO Optimized",
      description: "Built for search engine visibility",
      icon: "🔍",
    },
    {
      title: "24/7 Support",
      description: "Always here when you need us",
      icon: "🛟",
    },
  ];

  const stats = [
    { number: "120+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <Hero
        variant="gradient"
        size="xl"
        title="Elevate Digital"
        subtitle="Digital Excellence"
        description="We craft cutting-edge digital solutions that help your business thrive in a connected world. From stunning websites to powerful applications."
      >
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mt-8">
          <Link href="/contact">
            <Button variant="glass" size="lg" className="shadow-glow">
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-gray-900">
              View Our Work
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
        <GeometricBackground />
        <Container className="relative z-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 lg:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider variant="wave" className="text-gray-900" />

      {/* About Section */}
      <section className="relative py-20 bg-white dark:bg-gray-900">
        <FloatingOrbs />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                  About <span className="gradient-text">Elevate Digital</span>
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  We&apos;re a full-service digital agency passionate about turning innovative ideas into 
                  exceptional digital experiences. Our team combines creativity with technical expertise 
                  to deliver solutions that drive real results.
                </p>
                <div className="mt-8">
                  <Link href="/about">
                    <Button variant="gradient" size="lg">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <Card 
                    key={feature.title} 
                    variant="feature" 
                    size="sm"
                    className="text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <GradientMesh />
        <Container className="relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer comprehensive digital solutions to help your business succeed in the modern landscape.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link href={service.href} className="block h-full group">
                  <Card 
                    variant="premium" 
                    size="lg"
                    icon={service.icon}
                    title={service.title}
                    className="h-full text-center group-hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                    <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Learn More →
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button variant="primary" size="lg" className="shadow-purple">
                  View All Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <SectionDivider variant="curve" className="text-gray-50 dark:text-gray-800" />

      {/* Portfolio Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Take a look at some of our recent projects and success stories.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <Card 
                variant="glass" 
                className="text-center py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-dashed border-blue-200 dark:border-blue-800"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Amazing Projects Coming Soon
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                  We&apos;re preparing an exciting showcase of our latest work. Stay tuned for inspiring case studies and project highlights.
                </p>
                <Link href="/portfolio">
                  <Button variant="gradient" size="lg">
                    Explore Portfolio
                  </Button>
                </Link>
              </Card>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <FloatingOrbs />
        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold lg:text-4xl mb-6">
              Ready to <span className="text-yellow-300">Elevate</span> Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss your project and create something amazing together. 
              Get in touch for a free consultation.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
              <Link href="/contact">
                <Button variant="glass" size="xl" className="shadow-glow">
                  Start Your Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Button>
              </Link>
              <a href="mailto:info@elevatedigital.com">
                <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white hover:text-gray-900">
                  info@elevatedigital.com
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
