'use server'

import { contactSchema, newsletterSchema, quoteSchema, ContactData, NewsletterData, QuoteData, handleContact, handleNewsletter, handleQuote } from '@/lib/contact';

export async function sendContact(data: ContactData) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid input' };
  }
  await handleContact(parsed.data);
  return { success: true };
}

export async function subscribeNewsletter(data: NewsletterData) {
  const parsed = newsletterSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid email' };
  }
  await handleNewsletter(parsed.data);
  return { success: true };
}

export async function requestQuote(data: QuoteData) {
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: 'Invalid input' };
  }
  await handleQuote(parsed.data);
  return { success: true };
}
