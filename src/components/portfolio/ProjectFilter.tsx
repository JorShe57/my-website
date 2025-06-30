"use client";

export interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
  className?: string;
}

export default function ProjectFilter({
  categories,
  active,
  onChange,
  className,
}: ProjectFilterProps) {
  return (
    <div className={className}>
      <ul className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onChange(cat)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${active === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"}`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
