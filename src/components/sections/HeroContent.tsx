import { heroCopy } from "@/data/sections";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function HeroContent() {
  return (
    <div className="relative z-10 flex max-w-xl flex-col justify-center py-2 lg:py-4">
      <p className="text-small mb-3 uppercase text-accent">
        {heroCopy.eyebrow}
      </p>
      <h1 id="hero-heading" className="text-display text-fg">
        {heroCopy.headline[0]}
        <br />
        {heroCopy.headline[1]}
        <br />
        {heroCopy.headline[2]}
      </h1>
      <p className="text-body-lg mt-4 max-w-md text-fg-secondary">
        {site.description}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button href={site.cta.primary.href}>{site.cta.primary.label}</Button>
        <Button href={site.cta.secondary.href} variant="secondary">
          {site.cta.secondary.label}
        </Button>
      </div>
    </div>
  );
}
