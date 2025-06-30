import type { ReactNode } from "react";

export interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />
      <div className="relative z-10 px-4 py-24">
        <h1 className="text-4xl font-bold sm:text-6xl">{title}</h1>
        {subtitle && <p className="mt-4 text-xl sm:text-2xl">{subtitle}</p>}
        {children && <div className="mx-auto mt-6 max-w-2xl text-base sm:text-lg">{children}</div>}
      </div>
    </section>
  );
}
