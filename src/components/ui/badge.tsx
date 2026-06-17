import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        "transition-colors hover:bg-cyan-500/20",
        className
      )}
    >
      {children}
    </span>
  );
}
