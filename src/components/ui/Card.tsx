import type { ReactNode, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900",
        premium:
          "border-none text-white bg-gradient-to-br from-blue-600 to-purple-600",
        feature:
          "border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-800",
        glass:
          "border border-white/20 bg-white/10 backdrop-blur-lg text-white",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  icon?: ReactNode;
  backgroundColor?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  icon,
  children,
  className,
  backgroundColor,
  variant,
  size,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, size, className }))}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {icon && <div className="mb-4 text-3xl">{icon}</div>}
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
