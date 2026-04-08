import { cn } from "@/lib/utils";

const variants = {
  default: "bg-pondy-100 text-pondy-700 dark:bg-pondy-900/30 dark:text-pondy-300",
  sunset: "bg-sunset-100 text-sunset-700 dark:bg-sunset-900/30 dark:text-sunset-300",
  ocean: "bg-ocean-100 text-ocean-700 dark:bg-ocean-900/30 dark:text-ocean-300",
};

export function Badge({ className, variant = "default", children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
