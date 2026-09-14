import { differentials } from "@/data/differentials";
import { differentialsCopy } from "@/data/sections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";

export function Differentials() {
  return (
    <Section id="sobre" aria-labelledby="sobre-titulo">
      <Reveal>
        <SectionHeader
          titleId="sobre-titulo"
          eyebrow={differentialsCopy.eyebrow}
          title={differentialsCopy.title}
          description={differentialsCopy.description}
        />
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {differentials.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.id} delay={index * 0.06}>
              <Card className="h-full">
                <span className="mb-4 flex size-11 items-center justify-center rounded-md border border-line-subtle text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-h3 text-fg">{item.title}</h3>
                <p className="text-body mt-3 text-fg-secondary">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
