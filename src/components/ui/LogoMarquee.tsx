import { partners } from "@/data/partners";

export function LogoMarquee() {
  return (
    <div className="min-w-0 max-w-full overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-16 pr-16">
        {partners.map((partner) => (
          <span
            key={partner.id}
            className="shrink-0 text-sm tracking-[0.22em] text-fg-muted uppercase transition-opacity duration-200 hover:text-fg hover:opacity-100"
            style={{ opacity: 0.45 }}
          >
            {partner.name}
          </span>
        ))}
        {partners.map((partner) => (
          <span
            key={`loop-${partner.id}`}
            className="marquee-duplicate shrink-0 text-sm tracking-[0.22em] text-fg-muted uppercase"
            style={{ opacity: 0.45 }}
          >
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
}
