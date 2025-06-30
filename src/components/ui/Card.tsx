import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children?: ReactNode;
  className?: string;
  /**
   * Optional custom background color. Accepts any valid CSS color value.
   */
  backgroundColor?: string;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({
  title,
  children,
  className,
  backgroundColor,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900",
        className,
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
