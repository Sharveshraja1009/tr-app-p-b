import { cn } from "@/lib/utils";

export function Card({ className, children, glass = false, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300",
        glass
          ? "glass-light hover:bg-white/80 dark:hover:bg-white/12"
          : "bg-white dark:bg-ocean-900/50 border border-gray-100 dark:border-white/10",
        "hover:shadow-xl hover:shadow-pondy-500/10 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className }) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}

export function CardContent({ className, children }) {
  return <div className={cn("p-3.5 sm:p-5", className)}>{children}</div>;
}
