'use client';
import { motion } from 'framer-motion';

export default function Spinner({ className }: { className?: string }) {
  return (
    <motion.span
      className={className}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" className="opacity-25" />
        <path d="M22 12a10 10 0 0 1-10 10" />
      </svg>
    </motion.span>
  );
}
