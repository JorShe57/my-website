import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({ title, children, className }: CardProps) {
  return (
    <div className={cn("rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900", className)}>
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
