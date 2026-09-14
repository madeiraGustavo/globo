import { partners } from "@/data/partners";

export function LogoMarquee() {
  const items = [...partners, ...partners];

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-16 pr-16">
        {items.map((partner, index) => (
          <span
            key={`${partner.id}-${index}`}
            className="text-sm tracking-[0.22em] text-fg-muted uppercase transition-opacity duration-200 hover:text-fg hover:opacity-100"
            style={{ opacity: 0.45 }}
          >
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
}
