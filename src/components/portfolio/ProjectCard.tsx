import Image from "next/image";
import type { ReactNode } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  children?: ReactNode;
}

function cn(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectCard({
  title,
  description,
  image,
  className,
  children,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-transform hover:scale-[1.02] dark:border-gray-800 dark:bg-gray-900",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}
