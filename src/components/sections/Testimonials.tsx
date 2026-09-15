"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { testimonialsCopy } from "@/data/sections";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const node = scroller.current;
    if (!node) {
      return;
    }
    node.scrollBy({ left: direction * (node.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <Section id="depoimentos" aria-labelledby="depoimentos-titulo">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeader
            titleId="depoimentos-titulo"
            eyebrow={testimonialsCopy.eyebrow}
            title={testimonialsCopy.title}
          />
        </Reveal>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-fg hover:border-accent hover:text-accent"
            aria-label="Depoimento anterior"
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-fg hover:border-accent hover:text-accent"
            aria-label="Próximo depoimento"
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="mt-6 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="w-[min(100%,360px)] shrink-0 snap-start md:w-[420px]"
          >
            <TestimonialCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}
