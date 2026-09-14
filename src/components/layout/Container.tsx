import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("container-page", className)} {...props}>
      {children}
    </div>
  );
}
