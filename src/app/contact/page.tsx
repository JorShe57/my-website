import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/forms/ContactForm';
import QuoteRequestForm from '@/components/forms/QuoteRequestForm';

export const metadata: Metadata = {
  title: 'Contact Us | Elevate Digital',
  description: 'Get in touch with the Elevate Digital team.',
};

export default function ContactPage() {
  const offices = [
    {
      city: 'New York',
      address: '123 Main St, New York, NY',
      phone: '+1 (555) 123-4567',
      map: 'https://www.openstreetmap.org/export/embed.html?bbox=-74.012%2C40.703%2C-73.99%2C40.71&layer=mapnik',
    },
    {
      city: 'London',
      address: '45 Kingsway, London',
      phone: '+44 20 1234 5678',
      map: 'https://www.openstreetmap.org/export/embed.html?bbox=-0.12%2C51.506%2C-0.11%2C51.513&layer=mapnik',
    },
  ];

  const faqs = [
    {
      q: 'How do I request a quote?',
      a: 'Fill out the form and we will respond within 1-2 business days.',
    },
    { q: 'Do you work internationally?', a: 'Yes, we work with clients around the globe.' },
    {
      q: 'What services do you provide?',
      a: 'We offer web development, mobile apps, marketing and cloud solutions.',
    },
  ];

  return (
    <main>
      <Hero title="Contact Elevate Digital" subtitle="We would love to hear from you" />

      <section className="py-16" id="contact-form">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm />
            <div>
              <h3 className="text-lg font-semibold">Our Offices</h3>
              <ul className="mt-4 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                {offices.map((office) => (
                  <li key={office.city} className="rounded-md border p-4 dark:border-gray-700">
                    <p className="font-medium">{office.city}</p>
                    <p>{office.address}</p>
                    <p>{office.phone}</p>
                    <iframe
                      title={`${office.city} map`}
                      src={office.map}
                      className="mt-2 h-40 w-full border"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16" id="quote-request">
        <Container>
          <h2 className="text-center text-3xl font-bold">Request a Quote</h2>
          <div className="mx-auto mt-8 max-w-lg">
            <QuoteRequestForm />
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-950" id="faq">
        <Container>
          <h2 className="text-center text-3xl font-bold">FAQ</h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-md border p-4 dark:border-gray-700">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
