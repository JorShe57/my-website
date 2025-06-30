import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(1),
});

export const newsletterSchema = z.object({
  email: z.string().email(),
});

export const quoteSchema = contactSchema;

export type ContactData = z.infer<typeof contactSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type QuoteData = z.infer<typeof quoteSchema>;

async function sendEmail(subject: string, body: string) {
  console.log('Mock email:', { subject, body });
}

export async function handleContact(data: ContactData) {
  await sendEmail(`Contact from ${data.name}`, `${data.message}\nService: ${data.service}\nEmail: ${data.email}`);
}

export async function handleNewsletter(data: NewsletterData) {
  await sendEmail('Newsletter subscription', data.email);
}

export async function handleQuote(data: QuoteData) {
  await sendEmail(`Quote request from ${data.name}`, `${data.message}\nService: ${data.service}\nEmail: ${data.email}`);
}
