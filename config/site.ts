export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lemon CSS",
  description:
    "The definitive styling solution for modern Android applications. Create beautiful, responsive, and professional UIs with ease.",
  navItems: [
    {
      label: "Documentation",
      href: "https://github.com/lemoncss", // Using /installation for now, as it's an existing path
    },
    {
      label: "GitHub",
      href: "https://github.com/lemoncss",
      target: "_blank",
    },
  ],
  links: {
    github: "https://github.com/lemoncss",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
