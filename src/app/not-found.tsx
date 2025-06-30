import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-lg">Page not found.</p>
      <Link href="/" className="mt-6 text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}
