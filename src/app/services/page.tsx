'use client';
import type { Metadata } from 'next';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Hero from '@/components/sections/Hero';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Modal from '@/components/ui/Modal';
import { FloatingOrbs, GradientMesh, SectionDivider } from '@/components/ui/DecorativeBackgrounds';

export const metadata: Metadata = {
  title: 'Services | Elevate Digital',
  description: 'Explore our full range of digital services and pricing packages.',
};

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  timeline: string;
  priceRange: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  'Web Development': {
    title: 'Web Development',
    description: 'Custom websites and web apps built with modern frameworks.',
    features: [
      'Responsive design for all devices',
      'SEO-optimized architecture',
      'Performance tuning and caching',
      'E-commerce and CMS integrations',
      'Progressive web app capabilities',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    timeline: '4-12 weeks',
    priceRange: '$2,000 - $15,000',
  },
  'Mobile Apps': {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions.',
    features: [
      'iOS and Android development',
      'Cross-platform with React Native',
      'Intuitive mobile UI/UX',
      'App Store deployment',
      'Push notifications & analytics',
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Expo'],
    timeline: '6-16 weeks',
    priceRange: '$5,000 - $25,000',
  },
  'Digital Marketing': {
    title: 'Digital Marketing',
    description: 'Campaigns that amplify your brand online.',
    features: [
      'SEO and content strategy',
      'Pay-per-click advertising',
      'Social media management',
      'Email marketing automation',
      'Analytics & conversion tracking',
    ],
    technologies: ['Google Ads', 'Analytics', 'Mailchimp', 'Meta Ads'],
    timeline: 'Ongoing / monthly',
    priceRange: 'From $1,000/mo',
  },
  'Cloud Solutions': {
    title: 'Cloud Solutions',
    description: 'Infrastructure and DevOps for scale and reliability.',
    features: [
      'Infrastructure as Code',
      'CI/CD pipelines',
      'Scalable hosting on major clouds',
      'Monitoring and alerts',
      'Cost optimisation',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    timeline: '4-12 weeks',
    priceRange: '$3,000 - $20,000',
  },
};

const services = [
  {
    title: 'Web Development',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4M16 2v4M3 10h18" />
      </svg>
    ),
    description: 'Modern responsive websites built for your business.',
  },
  {
    title: 'Mobile Apps',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect width="12" height="20" x="6" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    description: 'iOS and Android applications users love.',
  },
  {
    title: 'Digital Marketing',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12l18-9v18L3 12z" />
      </svg>
    ),
    description: 'Strategies that grow your audience and brand.',
  },
  {
    title: 'Cloud Solutions',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 15a4 4 0 0 1 4-4 5 5 0 0 1 9.9-1A3.5 3.5 0 0 1 21 13.5 3.5 3.5 0 0 1 17.5 17H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
    description: 'Infrastructure and DevOps for scale and reliability.',
  },
];

const workflow = [
  { title: 'Discovery', icon: '🔍', description: 'We collaborate to understand goals and requirements.' },
  { title: 'Design', icon: '🎨', description: 'Our team crafts user-centric wireframes and prototypes.' },
  { title: 'Development', icon: '💻', description: 'Agile development brings your vision to life.' },
  { title: 'Deploy', icon: '🚀', description: 'Launch, monitor and iterate for ongoing success.' },
];

const pricing = [
  { name: 'Starter', price: '$1,999', features: ['Single landing page', 'Basic analytics', 'Email support'] },
  { name: 'Growth', price: '$4,999', features: ['Multi-page site or app', 'SEO optimization', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', features: ['Complex integrations', 'Dedicated project team', 'SLA & ongoing maintenance'] },
];

const differentiators = [
  { title: 'Experienced Team', description: 'Multidisciplinary experts with years of experience.', icon: '👥' },
  { title: 'Agile Approach', description: 'Client‑centric methodology with rapid iteration.', icon: '⚡' },
  { title: 'Proven Success', description: 'Track record of delivering results that exceed expectations.', icon: '🏆' },
  { title: 'Cutting-edge Tech', description: 'Latest technologies and best practices.', icon: '🚀' },
];

const testimonials = [
  { quote: 'Elevate Digital transformed our online presence and drove huge growth.', author: 'Acme Corp' },
  { quote: 'Their team delivered our app on time and beyond expectations.', author: 'Tech Startup' },
];

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <main>
      <Hero
        title="Our Services"
        subtitle="Solutions That Drive Success"
        variant="gradient"
        description="Explore how our team helps businesses thrive with modern technology."
      >
        <FloatingOrbs />
      </Hero>

      <section id="services" className="py-20">
        <Container>
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold mb-12">Services Overview</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Card
                  variant="premium"
                  className="text-center cursor-pointer hover:shadow-purple hover:-translate-y-2 duration-300"
                  onClick={() => setActive(service.title)}
                >
                  <div className="mx-auto mb-4 h-12 w-12 text-white">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/90">{service.description}</p>
                  <Button variant="glass" size="sm" className="mt-4">
                    Learn More
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>

        {services.map((s) => (
          <Modal key={s.title} open={active === s.title} onClose={() => setActive(null)} className="p-6">
            <Card variant="glass" className="p-6">
              <h3 className="text-2xl font-bold mb-2">{serviceDetails[s.title].title}</h3>
              <p className="mb-4 text-sm">{serviceDetails[s.title].description}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {serviceDetails[s.title].features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm">
                <strong>Technologies:</strong> {serviceDetails[s.title].technologies.join(', ')}
              </p>
              <p className="mt-1 text-sm">
                <strong>Timeline:</strong> {serviceDetails[s.title].timeline}
              </p>
              <p className="mt-1 text-sm">
                <strong>Starting at:</strong> {serviceDetails[s.title].priceRange}
              </p>
              <div className="mt-6 text-center">
                <Button variant="gradient" onClick={() => setActive(null)}>
                  Get Quote
                </Button>
              </div>
            </Card>
          </Modal>
        ))}
      </section>

      <section className="relative py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <SectionDivider variant="curve" className="absolute -top-20 left-0 right-0 text-gray-50 dark:text-gray-800" />
        <GradientMesh />
        <Container className="relative z-10">
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold mb-12">Our Process</h2>
          </AnimatedSection>
          <ol className="relative grid gap-12 md:grid-cols-4">
            {workflow.map((step, idx) => (
              <AnimatedSection key={step.title} delay={idx * 0.1} className="relative flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white text-xl shadow-xl">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-xs">{step.description}</p>
                {idx < workflow.length - 1 && (
                  <span className="hidden md:block absolute top-7 right-[-50%] w-full border-t-2 border-dashed border-blue-600" />
                )}
              </AnimatedSection>
            ))}
          </ol>
        </Container>
        <SectionDivider variant="curve" className="rotate-180 text-gray-50 dark:text-gray-800" />
      </section>

      <section className="py-20">
        <Container>
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold mb-12">Why Choose Us</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.1}>
                <Card variant="feature" className="text-center h-full">
                  <div className="text-3xl mb-4">{d.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{d.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <Container>
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold mb-12">Pricing</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {pricing.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={i * 0.1}>
                <Card variant="feature" className="text-center">
                  {tier.name === 'Growth' && (
                    <span className="mb-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Most Popular</span>
                  )}
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-2xl font-bold text-blue-600 dark:text-blue-400">{tier.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {tier.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Button variant="gradient" className="mt-6">
                    Get Started
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <AnimatedSection>
            <h2 className="text-center text-3xl font-bold mb-12">Testimonials</h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 0.1}>
                <Card variant="glass" className="text-center">
                  <p className="text-lg italic mb-3">“{t.quote}”</p>
                  <p className="text-sm font-semibold">— {t.author}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <FloatingOrbs />
        <Container className="relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let&apos;s discuss how we can help transform your business with innovative digital solutions.
            </p>
            <Button variant="glass" size="xl" className="shadow-glow">
              Get in Touch
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}

