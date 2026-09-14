import type { LucideIcon } from "lucide-react";

export type CaseAccent = "#B7FF3C" | "#7CFFD4" | "#C9F07D";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseMetric {
  label: string;
  value: string;
}

export interface CaseItem {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: CaseMetric[];
  accent: CaseAccent;
}

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface MethodStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  company: string;
  role: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
}

export interface PartnerItem {
  id: string;
  name: string;
}

export interface FooterLabel {
  id: string;
  label: string;
}

export type FooterColumn =
  | {
      id: string;
      title: string;
      links: NavItem[];
    }
  | {
      id: string;
      title: string;
      items: FooterLabel[];
    };
