import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

type SectionDensity = "default" | "compact" | "tight";

const densityClass: Record<SectionDensity, string> = {
  default: "section-space",
  compact: "section-space-compact",
  tight: "section-space-tight",
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  contained?: boolean;
  density?: SectionDensity;
};

export function Section({
  className,
  children,
  contained = true,
  density = "default",
  ...props
}: SectionProps) {
  return (
    <section className={cn("min-w-0", densityClass[density], className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
