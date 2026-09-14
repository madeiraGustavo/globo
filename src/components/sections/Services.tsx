import { servicesCopy } from "@/data/sections";
import { services } from "@/data/services";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <Section id="servicos" aria-labelledby="servicos-titulo">
      <Reveal>
        <SectionHeader
          titleId="servicos-titulo"
          eyebrow={servicesCopy.eyebrow}
          title={servicesCopy.title}
          description={servicesCopy.description}
        />
      </Reveal>
      <Reveal className="mt-8" delay={0.08}>
        <div>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
