import React from "react";

interface GlassCardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`bg-blue-50/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex flex-col gap-4 transition-transform hover:scale-[1.02] ${className}`}
    >
      {title && <h3 className="text-white text-xl font-semibold">{title}</h3>}
      <div className="text-white/90">{children}</div>
    </div>
  );
};

export default GlassCard;