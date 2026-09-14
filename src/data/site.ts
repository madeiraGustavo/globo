export const site = {
  name: "Globo",
  legalName: "Globo Tecnologia Ltda.",
  tagline: "Engenharia de software e IA para empresas que operam em escala.",
  description:
    "Projetamos e construímos plataformas de software e inteligência artificial para empresas que precisam de confiabilidade, escala e presença internacional.",
  url: "https://globo.local",
  email: "ola@globo.example",
  phone: "+55 11 4000-0000",
  address: "São Paulo · Lisboa · Nova York",
  copyright: `© ${new Date().getFullYear()} Globo. Todos os direitos reservados.`,
  cta: {
    primary: {
      label: "Falar com especialistas",
      href: "#contato",
    },
    secondary: {
      label: "Ver cases",
      href: "#cases",
    },
  },
} as const;
