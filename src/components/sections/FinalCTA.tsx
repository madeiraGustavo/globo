import { finalCtaCopy } from "@/data/sections";
import { site } from "@/data/site";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <Section
      id="contato"
      density="compact"
      className="relative overflow-hidden"
      aria-labelledby="contato-titulo"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(183_255_60_/_0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <Reveal>
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface px-6 py-10 text-center md:px-12 md:py-14">
          <p className="text-small mb-3 uppercase text-accent">{finalCtaCopy.eyebrow}</p>
          <h2 id="contato-titulo" className="text-h2 mx-auto max-w-3xl text-fg">
            {finalCtaCopy.title}
          </h2>
          <p className="text-body-lg mx-auto mt-4 max-w-xl text-fg-secondary">
            {finalCtaCopy.description}
          </p>
          <div className="mt-7 flex justify-center">
            <Button href={`mailto:${site.email}`}>{site.cta.primary.label}</Button>
          </div>
          <p className="text-small mt-6 text-fg-muted">{site.email}</p>
        </div>
      </Reveal>
    </Section>
  );
}
