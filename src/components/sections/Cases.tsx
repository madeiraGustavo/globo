import { cases } from "@/data/cases";
import { casesCopy } from "@/data/sections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CaseCard } from "@/components/ui/CaseCard";
import { Reveal } from "@/components/motion/Reveal";

export function Cases() {
  return (
    <Section id="cases" aria-labelledby="cases-titulo">
      <Reveal>
        <SectionHeader
          titleId="cases-titulo"
          eyebrow={casesCopy.eyebrow}
          title={casesCopy.title}
          description={casesCopy.description}
        />
      </Reveal>
      <div className="mt-8 flex flex-col gap-12 lg:gap-14">
        {cases.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <CaseCard item={item} reversed={index % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
