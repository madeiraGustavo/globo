import { socialProofCopy } from "@/data/sections";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Section } from "@/components/layout/Section";

export function SocialProof() {
  return (
    <Section id="clientes" density="tight" aria-label="Clientes e parceiros">
      <p className="text-small mb-5 text-center uppercase text-fg-muted">
        {socialProofCopy.label}
      </p>
      <LogoMarquee />
    </Section>
  );
}
