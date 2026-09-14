export function GlobeFallback() {
  return (
    <div
      className="relative h-full min-h-[280px] w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(183_255_60_/_0.12),transparent_58%)]" />
      <div className="absolute top-1/2 left-1/2 size-[min(78%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-[radial-gradient(circle_at_30%_25%,#1a1f14,#050505_62%)] shadow-[0_0_80px_rgb(183_255_60_/_0.08)]">
        <span className="absolute inset-[12%] rounded-full border border-line-subtle/80" />
        <span className="absolute inset-[28%] rounded-full border border-accent/20" />
        <span className="absolute top-[32%] left-[22%] size-1.5 rounded-full bg-accent shadow-[0_0_12px_#B7FF3C]" />
        <span className="absolute top-[48%] right-[28%] size-1.5 rounded-full bg-accent/80" />
        <span className="absolute bottom-[30%] left-[40%] size-2 rounded-full bg-accent shadow-[0_0_16px_#B7FF3C]" />
      </div>
    </div>
  );
}
