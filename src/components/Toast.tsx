import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="bg-[#211a17]/90 text-white backdrop-blur-md px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-xl border border-white/10 flex items-center gap-2 animate-[slideUp_0.2s_ease-out]">
        <span>{message}</span>
      </div>
    </div>
  );
};
