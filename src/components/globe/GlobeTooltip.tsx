import type { GlobeLocation } from "@/types/globe";

type GlobeTooltipProps = {
  location: GlobeLocation | null;
};

export function GlobeTooltip({ location }: GlobeTooltipProps) {
  if (!location) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute bottom-4 left-4 z-10 max-w-[min(100%-2rem,20rem)] rounded-md border border-line bg-surface-elevated/90 px-4 py-3 backdrop-blur-md"
      role="status"
    >
      <p className="text-sm font-medium text-fg">{location.city}</p>
      <p className="text-small mt-1 uppercase text-fg-muted">
        {location.country}
      </p>
      {location.label ? (
        <p className="text-small mt-2 text-accent">{location.label}</p>
      ) : null}
    </div>
  );
}
