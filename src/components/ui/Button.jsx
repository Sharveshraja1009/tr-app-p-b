import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-pondy-600 text-white hover:bg-pondy-700 shadow-lg shadow-pondy-600/25",
  outline: "border-2 border-pondy-500 text-pondy-500 hover:bg-pondy-500 hover:text-white",
  ghost: "hover:bg-white/10 text-current",
  sunset: "bg-gradient-to-r from-sunset-500 to-sunset-600 text-white hover:from-sunset-600 hover:to-sunset-700 shadow-lg shadow-sunset-500/25",
  glass: "glass hover:bg-white/20 text-white",
  glow: "bg-pondy-500 text-white hover:bg-pondy-600 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
  icon: "p-2.5",
};

const Button = forwardRef(({ className, variant = "default", size = "md", children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pondy-400 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export { Button };
