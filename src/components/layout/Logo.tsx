import { site } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#topo"
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium tracking-[0.18em] uppercase text-fg",
        className,
      )}
      aria-label={`${site.name}, ir para o início`}
    >
      <span
        className="size-2 rounded-full bg-accent"
        aria-hidden="true"
      />
      {site.name}
    </a>
  );
}
