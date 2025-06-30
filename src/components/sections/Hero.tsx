import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "video" | "particles" | "minimal";
  size?: "sm" | "default" | "lg" | "xl";
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  className,
  variant = "default",
  size = "default",
  backgroundImage,
  overlay = true,
  ...props
}: HeroProps) {
  const sizeClasses = {
    sm: "py-16 sm:py-20",
    default: "py-20 sm:py-28",
    lg: "py-28 sm:py-36",
    xl: "py-36 sm:py-48",
  } as const;

  const getBackgroundClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient-shift text-white";
      case "particles":
        return "bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden";
      case "video":
        return "bg-gray-900 text-white relative overflow-hidden";
      case "minimal":
        return "bg-white dark:bg-gray-900";
      default:
        return "bg-gradient-to-br from-blue-600 to-purple-700 text-white";
    }
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        getBackgroundClasses(),
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
      {...props}
    >
      {/* Background overlay */}
      {overlay && (backgroundImage || variant === "video") && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* Animated background elements for particles variant */}
      {variant === "particles" && (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float" />
          <div
            className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
        </>
      )}

      {/* Geometric shapes for visual interest */}
      {variant !== "minimal" && (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse" />
        </>
      )}

      <Container className="relative z-10 text-center">
        {/* Subtitle */}
        {subtitle && (
          <div className="animate-slide-in-left">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200 dark:text-blue-300 mb-4">
              {subtitle}
            </p>
          </div>
        )}

        {/* Main title */}
        <div className="animate-fade-in-up">
          <h1
            className={cn(
              "font-bold leading-tight",
              size === "sm" && "text-3xl sm:text-4xl",
              size === "default" && "text-4xl sm:text-5xl lg:text-6xl",
              size === "lg" && "text-5xl sm:text-6xl lg:text-7xl",
              size === "xl" && "text-6xl sm:text-7xl lg:text-8xl",
              variant === "gradient" && "gradient-text-rainbow",
              variant === "minimal" && "text-gray-900 dark:text-white"
            )}
          >
            {title}
          </h1>
        </div>

        {/* Description */}
        {(description || children) && (
          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="mt-6 max-w-3xl mx-auto">
              {description && (
                <p
                  className={cn(
                    "text-lg leading-relaxed",
                    size === "sm" && "text-base",
                    size === "lg" && "text-xl",
                    size === "xl" && "text-2xl",
                    variant === "minimal" ? "text-gray-600 dark:text-gray-400" : "text-white/90"
                  )}
                >
                  {description}
                </p>
              )}

              {children && <div className="mt-6">{children}</div>}
            </div>
          </div>
        )}
      </Container>

      {/* Scroll indicator */}
      {size !== "sm" && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </section>
  );
}
