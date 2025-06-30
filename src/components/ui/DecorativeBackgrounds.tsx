import type { SVGProps } from "react";

export function GeometricBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 opacity-20 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-2xl" />
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 h-36 w-36 rounded-full bg-purple-400/30 blur-2xl animate-float" />
      <div
        className="absolute top-1/2 right-1/3 h-24 w-24 rounded-full bg-pink-400/30 blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-blue-400/30 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}

export interface SectionDividerProps extends SVGProps<SVGSVGElement> {
  variant?: "wave" | "curve";
}

export function SectionDivider({ variant = "wave", className, ...props }: SectionDividerProps) {
  const path =
    variant === "curve"
      ? "M0 80 Q720 0 1440 80V100H0z"
      : "M0 30 Q360 80 720 30t720 50v20H0z";
  return (
    <svg
      viewBox="0 0 1440 100"
      className={className}
      fill="currentColor"
      preserveAspectRatio="none"
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

export function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-2xl" />
    </div>
  );
}
