import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleId,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-small mb-2.5 font-medium uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={titleId} className="text-h2 text-fg">
        {title}
      </h2>
      {description ? (
        <p className="text-body-lg mt-3 text-fg-secondary">{description}</p>
      ) : null}
    </header>
  );
}
