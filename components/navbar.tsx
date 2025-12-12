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
import { GithubIcon, Logo } from "@/components/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="px-10">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <p className="font-bold text-inherit">Lemon</p>
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
                  className="px-2"
                >
                  {item.label === "GitHub" ? <GithubIcon className="text-default-500" /> : item.label}
                </Link>
              ) : (
                <NextLink
                  href={item.href}
                  className="px-2"
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
        {/* For mobile, we can decide later if we want to loop navItems or keep specific icons */}
        {/* Keeping GitHub icon for now, as it was there */}
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};


