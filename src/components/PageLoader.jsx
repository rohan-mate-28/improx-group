import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img
          src="/logo-black.png"
          alt="Improx Group"
          className="h-16 w-auto animate-pulse"
        />
    
        {/* Spinner */}
        <div className="mt-6 w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />

        {/* Text */}
        <p className="mt-4 text-sm font-medium text-slate-600 tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}