import type { ServiceItem } from "@/types/content";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        "grid min-w-0 grid-cols-[auto_1fr] items-start gap-4 border-b border-line-subtle py-5 last:border-b-0",
        className,
      )}
    >
      <span className="text-small pt-1 font-medium text-accent">
        {service.number}
      </span>
      <div className="grid min-w-0 gap-3 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
        <span className="flex size-11 items-center justify-center rounded-md border border-line-subtle bg-surface text-accent">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-h3 text-balance text-fg">{service.title}</h3>
          <p className="text-body mt-2 max-w-2xl text-fg-secondary">
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}
