import {
  Brain,
  Cloud,
  Compass,
  Cpu,
  Layers,
} from "lucide-react";
import type { ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    id: "software",
    number: "01",
    title: "Engenharia de software",
    description:
      "Plataformas, APIs e produtos digitais com arquitetura pensada para escala, observabilidade e evolução contínua.",
    icon: Cpu,
  },
  {
    id: "ai",
    number: "02",
    title: "Inteligência artificial",
    description:
      "Sistemas de IA aplicados ao negócio: automação, agentes, visão computacional e modelos alinhados a KPIs reais.",
    icon: Brain,
  },
  {
    id: "cloud",
    number: "03",
    title: "Cloud e plataformas",
    description:
      "Infraestrutura resiliente, pipelines e operação global para times que não podem parar de entregar.",
    icon: Cloud,
  },
  {
    id: "product",
    number: "04",
    title: "Produto e experiência",
    description:
      "Discovery, design de interfaces e ritmos de entrega que transformam complexidade técnica em clareza para o usuário.",
    icon: Layers,
  },
  {
    id: "consulting",
    number: "05",
    title: "Consultoria estratégica",
    description:
      "Diagnóstico, roadmap e governança de tecnologia para lideranças que precisam decidir com evidência.",
    icon: Compass,
  },
];
