'use client';
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        secondary:
          "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border border-gray-300 shadow-md hover:shadow-lg hover:shadow-gray-400/25 hover:scale-105 active:scale-95 dark:from-gray-800 dark:to-gray-700 dark:text-white dark:border-gray-600 dark:hover:shadow-gray-500/25",
        outline:
          "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900",
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 active:scale-95 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
        gradient:
          "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95 animate-gradient before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-indigo-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        neon:
          "bg-gray-900 border border-blue-500 text-blue-400 shadow-neon hover:shadow-glow hover:bg-blue-500 hover:text-white hover:scale-105 active:scale-95 dark:bg-black",
        glass:
          "glass text-white hover:bg-white/20 hover:scale-105 active:scale-95 backdrop-blur-lg border border-white/20",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  className,
  variant,
  size,
  children,
  loading = false,
  icon,
  iconPosition = "left",
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={isDisabled}
      {...props}
    >
      {/* Shimmer effect overlay */}
      <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && icon && iconPosition === "left" && icon}
        
        <span className={loading ? "opacity-70" : ""}>
          {children}
        </span>
        
        {!loading && icon && iconPosition === "right" && icon}
      </span>
    </button>
  );
}

