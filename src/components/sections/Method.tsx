import { methodSteps } from "@/data/method";
import { methodCopy } from "@/data/sections";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";

export function Method() {
  return (
    <Section id="metodo" aria-labelledby="metodo-titulo">
      <Reveal>
        <SectionHeader
          titleId="metodo-titulo"
          eyebrow={methodCopy.eyebrow}
          title={methodCopy.title}
          description={methodCopy.description}
        />
      </Reveal>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {methodSteps.map((step) => (
          <li key={step.id} id={`metodo-${step.id}`}>
            <article className="h-full w-full min-w-0 rounded-lg border border-line-subtle bg-transparent p-5 text-left transition-[border-color,background-color] duration-200 ease-premium hover:border-accent hover:bg-surface sm:p-6">
              <p className="text-small text-accent">{step.number}</p>
              <h3 className="text-h3 mt-3 text-fg">{step.title}</h3>
              <p className="text-body mt-3 text-fg-secondary">
                {step.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
