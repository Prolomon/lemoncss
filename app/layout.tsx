import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-black font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark", forcedTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="w-full flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-6 border-t border-zinc-800 mt-12">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://prolomon.vercel.app"
                title="heroui.com homepage"
              >
                <span className="text-zinc-500">Powered by</span>
                <p className="text-[#facc15] font-bold">Prolomon</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
