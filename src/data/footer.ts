import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { FooterColumn } from "@/types/content";

export const footerColumns: FooterColumn[] = [
  {
    id: "navegacao",
    title: "Navegação",
    links: navigation,
  },
  {
    id: "servicos",
    title: "Serviços",
    items: services.map((service) => ({
      id: service.id,
      label: service.title,
    })),
  },
];

export const contactLines = [
  site.email,
  site.phone,
  site.address,
] as const;
