import { cn } from "@/lib/cn";

type MetricProps = {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
};

export function Metric({ value, suffix = "", label, className }: MetricProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <span
        className="text-h2 tabular-nums text-fg"
        aria-label={`${value}${suffix} ${label}`}
      >
        {value}
        {suffix}
      </span>
      <span className="text-body text-fg-secondary">{label}</span>
    </div>
  );
}
