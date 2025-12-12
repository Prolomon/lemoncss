import Image from "next/image";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";
import { Code, Download, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="grid items-center grid-cols-l lg:grid-cols-2 gap-6 py-16">
        <div className="flex flex-col gap-6">
          <div className="">
            <h1 className="text-5xl md:text-7xl font-bold text-default-900">
              Lemon CSS
            </h1>
            <p className="mt-4 text-lg md:text-xl text-default-600">
              The definitive styling solution for modern Android applications.
              Create beautiful, responsive, and professional UIs with ease.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/lemon.zip"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                className: "bg-royal-purple text-white",
              })}
            >
              <Download className="mr-2" size={20} />
              Download
            </Link>
            <Link
              isExternal
              href="https://github.com/Prolomon/lemoncss.git"
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                className:
                  "text-default-900 border-default-600 hover:bg-default-600/10",
              })}
            >
              <Github className="mr-2" size={20} />
              GitHub
            </Link>
          </div>
        </div>
        <Image
          src="/images/gray-lemon.png"
          alt="lemon image"
          width={600}
          height={250}
        />
      </section>

      {/* Showcase Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-default-900">
            Stunning UIs, Simplified
          </h2>
          <p className="mt-4 text-lg text-default-600 max-w-2xl mx-auto">
            Lemon provides a set of pre-built components and a flexible theming
            system that enables you to build beautiful Android apps faster.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-64 h-[480px] bg-gray-800 rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-900 p-4">
                <div className="space-y-4">
                  <div className="w-full h-24 bg-royal-purple rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    Featured Card
                  </div>
                  <div className="w-full h-10 bg-gray-700 rounded-md"></div>
                  <div className="w-3/4 h-10 bg-gray-700 rounded-md"></div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-16 bg-gray-700 rounded-md"></div>
                    <div className="w-1/2 h-16 bg-gray-700 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Code size={20} className="text-royal-purple" />
              <h3 className="text-xl font-semibold">Jetpack Compose Example</h3>
            </div>
            <pre className="bg-gray-900/70 p-4 rounded-md text-sm overflow-x-auto">
              <code className="font-mono text-gray-300">
                {`
import { Lemon } from "@/public/lemon";
export function LemonCard() {
  return (
  <div style={{...Lemon.display("flex"), ...Lemon.justifyContent("center")}}>
    <div style={{...Lemon.width(256), ...Lemon.height(480), ...Lemon.background("#ccc"), ...Lemon.borderRadius(22), ...Lemon.borderWidth(4), ...Lemon.overflow("hidden")}}>
      <div style={{...Lemon.width("100%"), ...Lemon.height("100%"), ...Lemon.background("#afafaf"), ...Lemon.padding(16)}}>
        <div>
          <div style={{...Lemon.width("100%"), ...Lemon.height(96), ...Lemon.background("royal-purple"), ...Lemon.borderRadius(20), ...Lemon.display("flex"), ...Lemon.justifyContent("center"), ...Lemon.color("white"), ...Lemon.fontWeight("bold"), ...Lemon.fontSize(18)}}>
                    Featured Card
          </div>
          <div style={{...Lemon.width("100%"), ...Lemon.height(40), ...Lemon.background("#ccc"), ...Lemon.borderRadius(15)}}></div>
          <div style={{...Lemon.width("75%"), ...Lemon.height(40), ...Lemon.background("#ccc"), ...Lemon.borderRadius(15)}}></div>
          <div style={{...Lemon.display("flex"), ...Lemon.gap(16)}}>
            <div style={{...Lemon.width("50%"), ...Lemon.height(64), ...Lemon.background("#ccc"), ...Lemon.borderRadius(20)}}></div>
            <div style={{...Lemon.width("50%"), ...Lemon.height(64), ...Lemon.background("#ccc"), ...Lemon.borderRadius(20)}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
                `}
              </code>
            </pre>
            <p className="mt-4 text-sm text-default-600">
              With Lemon's intuitive components, your code becomes cleaner and
              more readable.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-default-600 border-t border-default-600/10">
        <p>&copy; ${new Date().getFullYear()} Lemon. All rights reserved.</p>
        <Link
          isExternal
          href="https://github.com/heroui-inc/heroui"
          className="text-sm text-default-600 hover:text-royal-purple"
        >
          GitHub Repository
        </Link>
      </footer>
    </div>
  );
}
