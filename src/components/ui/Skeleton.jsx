import { cn } from "@/lib/utils";

export function Skeleton({ className }) {
  return <div className={cn("skeleton rounded-xl", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-ocean-900/50 border border-gray-100 dark:border-white/10">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-9 w-28 mt-2" />
      </div>
    </div>
  );
}
