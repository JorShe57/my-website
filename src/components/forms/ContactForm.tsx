'use client';
import { FormEvent, useState, useTransition } from 'react';
import { sendContact } from '@/actions/contact';
import Button from '@/components/ui/Button';
import Toast from '@/components/ui/Toast';

export default function ContactForm() {
  const [pending, startTransition] = useTransition();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !service || !message) {
      setToast({ message: 'All fields are required.', type: 'error' });
      return;
    }

    startTransition(async () => {
      const result = await sendContact({ name, email, service, message });
      if (result.success) {
        form.reset();
        setToast({ message: 'Message sent!', type: 'success' });
      } else {
        setToast({ message: result.error ?? 'Something went wrong.', type: 'error' });
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select a service</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile Apps</option>
          <option value="marketing">Digital Marketing</option>
          <option value="cloud">Cloud Solutions</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          rows={4}
        />
      </div>
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? 'Sending...' : 'Send Message'}
      </Button>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </form>
  );
}
