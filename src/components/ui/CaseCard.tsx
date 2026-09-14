import { Badge } from "@/components/ui/Badge";
import type { CaseAccent, CaseItem } from "@/types/content";
import { cn } from "@/lib/cn";

type CaseCardProps = {
  item: CaseItem;
  reversed?: boolean;
};

export function CaseCard({ item, reversed = false }: CaseCardProps) {
  return (
    <article
      className={cn(
        "grid items-center gap-6 lg:grid-cols-12 lg:gap-10",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-line-subtle bg-surface lg:col-span-7",
          reversed && "lg:order-2",
        )}
      >
        <CaseVisual accent={item.accent} title={item.client} />
      </div>
      <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
        <p className="text-small mb-3 uppercase text-accent">{item.category}</p>
        <p className="text-body text-fg-muted">{item.client}</p>
        <h3 className="text-h3 mt-3 text-fg">{item.title}</h3>
        <p className="text-body mt-4 text-fg-secondary">{item.description}</p>
        <dl className="mt-6 grid grid-cols-2 gap-4">
          {item.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-small uppercase text-fg-muted">
                {metric.label}
              </dt>
              <dd className="mt-1 text-2xl font-medium text-fg">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

function CaseVisual({ accent, title }: { accent: CaseAccent; title: string }) {
  return (
    <div className="group relative aspect-[16/11] overflow-hidden bg-bg-secondary">
      <div
        className="absolute inset-0 opacity-70 transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accent}33, transparent 42%), radial-gradient(circle at 80% 80%, ${accent}22, transparent 40%), #090909`,
        }}
      />
      <div className="absolute inset-8 rounded-lg border border-line bg-surface-elevated/80 p-5 backdrop-blur-sm">
        <div className="mb-5 flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </div>
        <div className="grid gap-3">
          <div className="h-3 w-1/3 rounded-pill bg-fg/15" />
          <div className="h-24 rounded-md border border-line-subtle bg-bg/60" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-md bg-fg/8" />
            <div className="h-16 rounded-md bg-fg/8" />
            <div
              className="h-16 rounded-md"
              style={{ background: `${accent}33` }}
            />
          </div>
        </div>
        <p className="text-small absolute right-5 bottom-5 uppercase text-fg-muted">
          {title}
        </p>
      </div>
    </div>
  );
}
