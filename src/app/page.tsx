import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  const services = [
    { title: "Web Development", description: "Modern websites built for scale." },
    { title: "Mobile Apps", description: "iOS and Android applications." },
    { title: "Digital Marketing", description: "Grow your audience and brand." },
    { title: "Cloud Solutions", description: "Infrastructure and DevOps services." },
  ];

  return (
    <main>
      <section id="home" className="relative flex min-h-screen items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />
        <Container className="relative z-10 py-32">
          <AnimatedSection>
            <h1 className="text-4xl font-bold sm:text-6xl">Elevate Digital</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-4 text-xl sm:text-2xl">Transforming Ideas Into Digital Excellence</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">
              We craft cutting-edge digital solutions that help your business thrive in a connected world.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary">Get Started</Button>
              <Button variant="outline">View Our Work</Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section id="about" className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold">About Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            Elevate Digital is a full-service agency turning ideas into digital experiences.
          </p>
        </Container>
      </section>

      <section id="services" className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Card title={service.title}>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section id="portfolio" className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold">Portfolio</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            Coming soon: a showcase of our latest projects.
          </p>
        </Container>
      </section>

      <section id="contact" className="py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            Reach out at <a className="text-blue-600 underline" href="mailto:info@elevatedigital.com">info@elevatedigital.com</a>
          </p>
        </Container>
      </section>
    </main>
  );
}

