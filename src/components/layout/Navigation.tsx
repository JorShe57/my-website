"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className={className}>
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600",
              isActive ? "text-blue-600" : "hover:text-blue-600"
            )}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
