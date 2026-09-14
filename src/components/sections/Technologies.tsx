import { technologiesCopy } from "@/data/sections";
import { technologies } from "@/data/technologies";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export function Technologies() {
  return (
    <Section id="tecnologias" aria-labelledby="tecnologias-titulo">
      <Reveal>
        <SectionHeader
          titleId="tecnologias-titulo"
          eyebrow={technologiesCopy.eyebrow}
          title={technologiesCopy.title}
          description={technologiesCopy.description}
        />
      </Reveal>
      <Reveal className="mt-6" delay={0.08}>
        <ul className="flex flex-wrap gap-3">
          {technologies.map((item) => (
            <li key={item.id}>
              <Badge className="px-4 py-2 text-xs tracking-[0.14em]">
                {item.name}
              </Badge>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
