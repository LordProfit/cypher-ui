import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "relative flex items-center justify-center rounded-[316px] px-[31.657px] py-[10.13px] gap-[5.07px] font-bold text-[17.728px] leading-[21px] text-white",
        "bg-indigo-700/70 backdrop-blur-[2.85px] border border-indigo-200/20",
        "shadow-[0_87.69px_35.14px_rgba(0,0,0,0.01),0_49.385px_29.7577px_rgba(0,0,0,0.05),0_21.843px_21.843px_rgba(0,0,0,0.09),0_5.3817px_12.0297px_rgba(0,0,0,0.1)]",
        "hover:bg-indigo-800/80 hover:border-indigo-300/40 transition-all duration-300 ease-in-out",
        className
      )}
    >
      {children}
      {/* Overlay gradient stroke like your Figma vectors */}
      <span className="absolute inset-0 rounded-[316px] border border-white/10 pointer-events-none mix-blend-overlay"></span>
    </button>
  );
};

export default GlassButton;