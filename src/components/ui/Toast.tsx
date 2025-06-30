'use client';
import { useEffect } from 'react';

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose?: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const id = setTimeout(() => onClose?.(), 4000);
    return () => clearTimeout(id);
  }, [onClose]);

  return (
    <div
      role="alert"
      className={`fixed bottom-4 right-4 rounded-md px-4 py-2 text-sm text-white ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
    >
      {message}
    </div>
  );
}
