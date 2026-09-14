import { GLOBE_ACCENT } from "@/lib/globe-theme";
import type { CaseItem } from "@/types/content";

export const CASE_ACCENT = {
  lime: GLOBE_ACCENT,
  mint: "#7CFFD4",
  moss: "#C9F07D",
} as const;

export const cases: CaseItem[] = [
  {
    id: "atlas-logistica",
    client: "Atlas Logística",
    title: "Torre de controle em tempo real para uma malha continental",
    category: "Plataforma operacional",
    description:
      "Unificamos telemetria, previsão de demanda e roteirização em um único painel. O time operacional passou a agir em minutos, não em turnos.",
    tags: ["IA", "Dados", "Cloud"],
    metrics: [
      { label: "Tempo de decisão", value: "-47%" },
      { label: "Rotas otimizadas", value: "12k/dia" },
    ],
    accent: CASE_ACCENT.lime,
  },
  {
    id: "lumen-saude",
    client: "Lumen Saúde",
    title: "Motor clínico que antecipa risco sem sacrificar privacidade",
    category: "Inteligência artificial",
    description:
      "Modelos treinados com dados anonimizados, integrados ao fluxo hospitalar. Médicos recebem sinais claros, não dashboards barulhentos.",
    tags: ["IA", "Produto", "Compliance"],
    metrics: [
      { label: "Alertas úteis", value: "+63%" },
      { label: "Adoção clínica", value: "91%" },
    ],
    accent: CASE_ACCENT.mint,
  },
  {
    id: "norte-capital",
    client: "Norte Capital",
    title: "Plataforma de onboarding institucional em 14 mercados",
    category: "Software financeiro",
    description:
      "Um núcleo único de identidade, risco e contratos, com experiências locais. A operação global deixou de ser uma colagem de sistemas.",
    tags: ["Fintech", "Design", "Escala"],
    metrics: [
      { label: "Time-to-live", value: "-5 sem." },
      { label: "Mercados", value: "14" },
    ],
    accent: CASE_ACCENT.moss,
  },
];
