import { z } from 'zod';
import { Resend } from 'resend';

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

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

async function sendEmail(subject: string, body: string) {
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  if (!from || !to || !resend) {
    console.error('Email not sent: missing Resend configuration');
    return;
  }
  try {
    await resend.emails.send({
      from,
      to,
      subject,
      text: body,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
  }
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
