import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-line-subtle bg-surface px-3 py-1 text-small uppercase text-fg-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
