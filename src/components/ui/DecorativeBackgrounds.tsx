'use client';
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

// Enhanced geometric pattern background with both patterns and gradients
export function GeometricBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Gradient orbs from branch version */}
      <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-pink-500 to-yellow-500 opacity-20 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 blur-2xl" />
      
      {/* SVG patterns from main version */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id="geometric-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.1" />
            <circle cx="75" cy="75" r="2" fill="currentColor" opacity="0.1" />
            <rect x="45" y="45" width="10" height="10" fill="currentColor" opacity="0.05" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
      </svg>
    </div>
  );
}

// Enhanced floating orbs background combining both versions
export function FloatingOrbs({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Larger, more vibrant orbs from branch version */}
      <div className="absolute top-1/4 left-1/4 h-36 w-36 rounded-full bg-purple-400/30 blur-2xl animate-float" />
      <div
        className="absolute top-1/2 right-1/3 h-24 w-24 rounded-full bg-pink-400/30 blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 h-32 w-32 rounded-full bg-blue-400/30 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Additional subtle orbs from main version */}
      <div 
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-indigo-500/20 rounded-full animate-float blur-xl" 
        style={{ animationDelay: "3s" }}
      />
      <div 
        className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-cyan-500/20 rounded-full animate-float blur-xl" 
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
}

// Grid pattern background
export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
}

// Enhanced gradient mesh background
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Enhanced version combining both approaches */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-2xl animate-gradient-shift" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-400/30 to-transparent animate-pulse" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-400/30 to-transparent animate-pulse" style={{ animationDelay: "2s" }} />
    </div>
  );
}

// Noise texture background
export function NoiseBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-30", className)}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend mode="multiply" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

// Animated waves background
export function WavesBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="0.1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,101.3C672,75,768,53,864,64C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
      </svg>
    </div>
  );
}

// Particle field background
export function ParticleField({ className }: { className?: string }) {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${6 + particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Enhanced section divider combining both approaches
export interface SectionDividerProps extends SVGProps<SVGSVGElement> {
  variant?: "wave" | "diagonal" | "curve" | "zigzag";
  className?: string;
}

export function SectionDivider({ 
  variant = "wave",
  className,
  ...props 
}: SectionDividerProps) {
  const dividers = {
    wave: (
      <svg viewBox="0 0 1440 120" className="w-full h-full" {...props}>
        <path
          fill="currentColor"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        />
      </svg>
    ),
    diagonal: (
      <svg viewBox="0 0 1440 120" className="w-full h-full" {...props}>
        <path fill="currentColor" d="M0,120L1440,0L1440,120L0,120Z" />
      </svg>
    ),
    curve: (
      <svg viewBox="0 0 1440 120" className="w-full h-full" {...props}>
        <path
          fill="currentColor"
          d="M0,120C240,40 480,40 720,60C960,80 1200,80 1440,60L1440,120L0,120Z"
        />
      </svg>
    ),
    zigzag: (
      <svg viewBox="0 0 1440 120" className="w-full h-full" {...props}>
        <path
          fill="currentColor"
          d="M0,120L120,40L240,120L360,40L480,120L600,40L720,120L840,40L960,120L1080,40L1200,120L1320,40L1440,120L1440,120L0,120Z"
        />
      </svg>
    ),
  } as const;

  return (
    <div className={cn("relative h-20 w-full text-gray-100 dark:text-gray-800", className)}>
      {dividers[variant]}
    </div>
  );
}