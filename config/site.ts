export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lemon CSS",
  description:
    "The definitive styling solution for modern Android applications. Create beautiful, responsive, and professional UIs with ease.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "How It Works",
      href: "/how-it-works",
    },
    {
      label: "GitHub",
      href: "https://github.com/Prolomon/lemoncss.git",
      target: "_blank",
    },
  ],
  links: {
    github: "https://github.com/Prolomon/lemoncss.git",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://lemoncss.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://github.com/sponsors/Prolomon",
  },
};
