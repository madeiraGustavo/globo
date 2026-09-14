import dynamic from "next/dynamic";
import { GlobeFallback } from "@/components/globe/GlobeFallback";
import { Container } from "@/components/layout/Container";
import { HeroContent } from "@/components/sections/HeroContent";

const Globe3D = dynamic(
  () => import("@/components/globe/Globe3D").then((mod) => mod.Globe3D),
  {
    loading: () => <GlobeFallback />,
  },
);

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgb(183_255_60_/_0.08),transparent_42%),radial-gradient(circle_at_15%_20%,rgb(255_255_255_/_0.04),transparent_36%)]" />
        <div className="grid-overlay absolute inset-0 opacity-50" />
        <div className="noise-overlay absolute inset-0 opacity-[0.07] mix-blend-overlay" />
      </div>
      <Container className="relative grid items-center py-6 lg:grid-cols-12 lg:gap-6 lg:py-8">
        <div className="lg:col-span-5">
          <HeroContent />
        </div>
        <div className="relative h-[42vh] min-h-[280px] lg:col-span-7 lg:h-[min(56vh,560px)]">
          <Globe3D />
        </div>
      </Container>
    </section>
  );
}
