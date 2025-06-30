"use client";
import Link from "next/link";
import Navigation, { NavItem } from "./Navigation";
import NewsletterForm from "@/components/forms/NewsletterForm";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const items: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`bg-gray-100 py-12 text-gray-700 dark:bg-gray-900 dark:text-gray-300 ${className ?? ""}`}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold">Elevate Digital</h3>
          <p className="mt-2 text-sm">Transforming Ideas Into Digital Excellence</p>
          <div className="mt-4 flex space-x-4" aria-label="Social links">
            <Link href="#" aria-label="Twitter" className="hover:text-blue-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 19c11 0 17-9 17-17v-1a12 12 0 0 0 3-3 11.96 11.96 0 0 1-3.4.9 6 6 0 0 0 2.6-3.3 12 12 0 0 1-3.8 1.4A6 6 0 0 0 6.3 8.7a17 17 0 0 1-12-6A6 6 0 0 0 4 9.5a6 6 0 0 1-2.7-.7v.1a6 6 0 0 0 4.8 5.9 6 6 0 0 1-2.7.1 6 6 0 0 0 5.6 4.2A12 12 0 0 1 0 17.5 17 17 0 0 0 8 19" />
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <Navigation items={items} className="mt-2 flex flex-col space-y-2" />
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact Us</h4>
          <p className="mt-2 text-sm">info@elevatedigital.com</p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-4 text-center text-xs dark:border-gray-700">
        © {new Date().getFullYear()} Elevate Digital. All rights reserved.
      </div>
    </footer>
  );
}

