'use client'
import React from "react";

interface LayeredButtonProps {
  children: React.ReactNode;
}

export function LayeredButton({ children }: LayeredButtonProps) {
  return (
    <button
      className="relative rounded-lg px-6 py-3 overflow-hidden"
      style={{}}
    >
      <span
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)",
          filter: "blur(8px)",
          zIndex: 0,
        }}
      />
      <span
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
          boxShadow:
            "0 4px 6px rgba(59, 130, 246, 0.5), 0 1px 3px rgba(14, 165, 233, 0.3)",
          zIndex: 1,
          transition: "background 0.3s ease",
        }}
      />
      <span
        className="relative z-10 text-white font-semibold"
      >
        {children}
      </span>
      <style jsx>{`
        button:hover > span:nth-child(2) {
          background: linear-gradient(135deg, #2563EB 0%, #0891B2 100%);
        }
      `}</style>
    </button>
  );
}
