"use client"

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import { Lemon } from "@/lib/lemon";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" style={{ ...Lemon.backgroundColor("#000"), ...Lemon.borderBottom("1px solid #222") }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
             <div style={{ ...Lemon.width(32), ...Lemon.height(32), ...Lemon.backgroundColor("#facc15"), ...Lemon.borderRadius(8) }}></div>
            <p style={{ ...Lemon.fontWeight("bold"), ...Lemon.fontSize(20), ...Lemon.color("#fff") }}>Lemon</p>
          </NextLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.label} isActive={pathname === item.href}>
              {item.target === "_blank" ? (
                <Link
                  isExternal
                  href={item.href}
                  aria-label={item.label}
                  style={{
                    ...Lemon.padding("0 8px"),
                    ...Lemon.color(pathname === item.href ? "#fff" : "#999"),
                  }}
                >
                  {item.label === "GitHub" ? <GithubIcon className="text-default-500" /> : item.label}
                </Link>
              ) : (
                <NextLink
                  href={item.href}
                  style={{
                    ...Lemon.padding("0 8px"),
                    ...Lemon.color(pathname === item.href ? "#fff" : "#999"),
                    ...Lemon.textDecoration("none"),
                  }}
                >
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
