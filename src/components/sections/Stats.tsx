"use client";
import { useEffect, useRef, useState } from "react";

export interface Stat {
  label: string;
  value: number;
}

export interface StatsProps {
  stats: Stat[];
  className?: string;
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Stats({ stats, className }: StatsProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;
    const durations = stats.map((s) => Math.min(2000, s.value * 20));
    const starts = performance.now();

    function animate(now: number) {
      const elapsed = now - starts;
      setCounts((prev) =>
        prev.map((_, i) =>
          Math.min(
            stats[i].value,
            Math.floor((elapsed / durations[i]) * stats[i].value)
          )
        )
      );
      if (elapsed < Math.max(...durations)) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <dt className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {counts[i]}
            </dt>
            <dd className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
