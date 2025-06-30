"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navigation, { NavItem } from "./Navigation";

export interface HeaderProps {
  className?: string;
}
export default function Header({ className }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const items: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur bg-white/80 dark:bg-gray-900/80 ${className ?? ""}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-bold">
          Elevate Digital
        </Link>
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="sm:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className="hidden sm:block">
          <Navigation items={items} className="flex space-x-6" />
        </div>
      </div>
      <div
        className={`sm:hidden transition-all ${menuOpen ? "max-h-60" : "max-h-0 overflow-hidden"}`}
      >
        <Navigation
          items={items}
          className="flex flex-col space-y-2 px-4 pb-4"
          onNavigate={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
}

