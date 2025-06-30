"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  social?: SocialLinks;
}

export interface TeamProps {
  members: TeamMember[];
  className?: string;
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function Team({ members, className }: TeamProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={
        "grid gap-8 sm:grid-cols-2 md:grid-cols-3 " + (className ?? "")
      }
    >
      {members.map((member, idx) => (
        <div
          key={member.name}
          className={`rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-700 dark:border-gray-800 dark:bg-gray-900 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{member.title}</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
          {member.social && (
            <div className="mt-3 flex justify-center space-x-4" aria-label="Social links">
              {member.social.twitter && (
                <a href={member.social.twitter} className="hover:text-blue-600" aria-label="Twitter">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 19c11 0 17-9 17-17v-1a12 12 0 0 0 3-3 11.96 11.96 0 0 1-3.4.9 6 6 0 0 0 2.6-3.3 12 12 0 0 1-3.8 1.4A6 6 0 0 0 6.3 8.7a17 17 0 0 1-12-6A6 6 0 0 0 4 9.5a6 6 0 0 1-2.7-.7v.1a6 6 0 0 0 4.8 5.9 6 6 0 0 1-2.7.1 6 6 0 0 0 5.6 4.2A12 12 0 0 1 0 17.5 17 17 0 0 0 8 19" />
                  </svg>
                </a>
              )}
              {member.social.linkedin && (
                <a href={member.social.linkedin} className="hover:text-blue-600" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                  </svg>
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} className="hover:text-blue-600" aria-label="GitHub">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 0 0-3.162 19.49c.5.09.683-.217.683-.482 0-.237-.009-.868-.013-1.704-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.221-.252-4.555-1.11-4.555-4.941 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.563 9.563 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.566 4.935.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.576.688.479A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
