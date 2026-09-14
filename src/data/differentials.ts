import { Globe2, Lock, Rocket, Users } from "lucide-react";
import type { DifferentialItem } from "@/types/content";

export const differentials: DifferentialItem[] = [
  {
    id: "global",
    title: "Presença global, execução local",
    description:
      "Times e entrega em fusos que acompanham a operação do cliente, com um único padrão de qualidade.",
    icon: Globe2,
  },
  {
    id: "reliability",
    title: "Confiabilidade como produto",
    description:
      "Observabilidade, segurança e continuidade entram no desenho — não como apêndice no final do roadmap.",
    icon: Lock,
  },
  {
    id: "speed",
    title: "Ritmo de elite",
    description:
      "Ciclos curtos, decisões visíveis e software que chega à produção com critério, não com pressa vazia.",
    icon: Rocket,
  },
  {
    id: "partnership",
    title: "Parceria, não staff temporário",
    description:
      "Trabalhamos lado a lado com liderança e engenharia interna. Adoção é parte do contrato, não um extra.",
    icon: Users,
  },
];
