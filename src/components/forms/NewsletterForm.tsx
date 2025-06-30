'use client';
import { FormEvent, useState, useTransition } from 'react';
import { subscribeNewsletter } from '@/actions/contact';
import Button from '@/components/ui/Button';
import Toast from '@/components/ui/Toast';

export default function NewsletterForm() {
  const [pending, startTransition] = useTransition();
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get('email') as string) || '';
    if (!email) {
      setToast({ message: 'Email is required.', type: 'error' });
      return;
    }
    startTransition(async () => {
      const result = await subscribeNewsletter({ email });
      if (result.success) {
        form.reset();
        setToast({ message: 'Subscribed!', type: 'success' });
      } else {
        setToast({ message: result.error ?? 'Invalid email.', type: 'error' });
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-xs" aria-label="Newsletter subscription">
      <label htmlFor="newsletter" className="sr-only">
        Email
      </label>
      <input
        id="newsletter"
        name="email"
        type="email"
        required
        className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        placeholder="Email address"
      />
      <Button type="submit" disabled={pending} className="rounded-l-none" variant="primary">
        {pending ? 'Sending...' : 'Subscribe'}
      </Button>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </form>
  );
}
