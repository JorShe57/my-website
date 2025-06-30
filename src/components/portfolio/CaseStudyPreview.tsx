"use client";
import { useState } from "react";
import Image from "next/image";

export interface CaseStudyPreviewProps {
  title: string;
  result: string;
  imageBefore: string;
  imageAfter: string;
  className?: string;
}

export default function CaseStudyPreview({
  title,
  result,
  imageBefore,
  imageAfter,
  className,
}: CaseStudyPreviewProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 ${className ?? ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-40 w-full">
        <Image
          src={imageBefore}
          alt={`${title} before`}
          fill
          className={`object-cover transition-opacity ${hover ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src={imageAfter}
          alt={`${title} after`}
          fill
          className={`object-cover transition-opacity ${hover ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{result}</p>
      </div>
    </div>
  );
}
