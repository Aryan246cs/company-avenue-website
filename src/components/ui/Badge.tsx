import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "outline";
  className?: string;
}

const variants = {
  default: "bg-primary/10 text-primary",
  accent: "bg-accent/15 text-accent-dark",
  success: "bg-green-50 text-green-700",
  outline: "border border-primary/20 text-primary",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
