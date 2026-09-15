import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "min-w-0 rounded-lg border border-line-subtle bg-surface p-5 sm:p-6 transition-[border-color,background-color] duration-200 ease-premium hover:border-line",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
