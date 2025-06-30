"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  items: NavItem[];
  className?: string;
  onNavigate?: () => void;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({ items, className, onNavigate }: NavigationProps) {
  const [active, setActive] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach((item) => {
      if (!item.href.startsWith("#")) return;
      const el = document.querySelector(item.href);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.href);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [items]);

  return (
    <nav aria-label="Main navigation" className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600",
            active === item.href ? "text-blue-600" : "hover:text-blue-600"
          )}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
