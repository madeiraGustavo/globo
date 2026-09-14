export interface GlobeLocation {
  id: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  label?: string;
  href?: string;
  featured?: boolean;
}

export interface GlobeArc {
  id: string;
  from: string;
  to: string;
}
