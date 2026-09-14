import { metrics } from "@/data/metrics";
import { metricsCopy } from "@/data/sections";
import { Section } from "@/components/layout/Section";
import { Metric } from "@/components/ui/Metric";
import { Reveal } from "@/components/motion/Reveal";

export function Metrics() {
  return (
    <Section id="resultados" density="compact" aria-labelledby="metricas-titulo">
      <h2 id="metricas-titulo" className="sr-only">
        {metricsCopy.title}
      </h2>
      <Reveal>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((item) => (
            <Metric
              key={item.id}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
