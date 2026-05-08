import Image from "next/image";
import { Link } from "@heroui/link";
import { Download, Github, Zap, Shield, Sparkles, Smartphone, Globe } from "lucide-react";
import { LemonButton } from "@/components/lemon-ui/LemonButton";
import { LemonCard } from "@/components/lemon-ui/LemonCard";
import { LemonContainer } from "@/components/lemon-ui/LemonContainer";
import { Lemon } from "@/lib/lemon";

export default function Home() {
  return (
    <div style={{ ...Lemon.minHeight("100vh"), ...Lemon.backgroundColor("#000"), ...Lemon.color("#fff") }}>
      {/* Hero Section */}
      <section style={{ ...Lemon.paddingTop(80), ...Lemon.paddingBottom(80) }}>
        <LemonContainer>
          <div style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.alignItems("center"), ...Lemon.textAlign("center"), ...Lemon.gap(24) }}>
            <div style={{ ...Lemon.position("relative"), ...Lemon.width(200), ...Lemon.height(200) }}>
               <Image
                src="/images/lemon-1.png"
                alt="Lemon CSS Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <h1 style={{ ...Lemon.fontSize(64), ...Lemon.fontWeight("900"), ...Lemon.marginBottom(0), ...Lemon.background("linear-gradient(to right, #facc15, #eab308)"), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" as any }}>
              Lemon CSS
            </h1>
            <p style={{ ...Lemon.fontSize(20), ...Lemon.color("#999"), ...Lemon.maxWidth(700), ...Lemon.lineHeight(1.6) }}>
              The professional styling engine for modern applications.
              One pattern, infinite possibilities. Works seamlessly on <strong>Web</strong> and <strong>Mobile</strong>.
            </p>
            <div style={{ ...Lemon.display("flex"), ...Lemon.gap(16), ...Lemon.marginTop(12) }}>
              <Link href="/docs">
                <LemonButton size="lg">
                  <Download size={20} style={{ ...Lemon.marginRight(8) }} />
                  Get Started
                </LemonButton>
              </Link>
              <Link isExternal href="https://github.com/Prolomon/lemoncss.git">
                <LemonButton size="lg" variant="secondary">
                  <Github size={20} style={{ ...Lemon.marginRight(8) }} />
                  GitHub
                </LemonButton>
              </Link>
            </div>
          </div>
        </LemonContainer>
      </section>

      {/* Cross-Platform Section */}
      <section style={{ ...Lemon.paddingTop(60), ...Lemon.paddingBottom(60), ...Lemon.borderTop("1px solid #222"), ...Lemon.borderBottom("1px solid #222") }}>
        <LemonContainer>
          <div style={{ ...Lemon.display("flex"), ...Lemon.justifyContent("center"), ...Lemon.gap(48), ...Lemon.flexWrap("wrap") }}>
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12) }}>
              <Globe size={24} style={{ ...Lemon.color("#facc15") }} />
              <span style={{ ...Lemon.fontSize(18), ...Lemon.fontWeight("600") }}>Web Ready</span>
            </div>
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12) }}>
              <Smartphone size={24} style={{ ...Lemon.color("#facc15") }} />
              <span style={{ ...Lemon.fontSize(18), ...Lemon.fontWeight("600") }}>Mobile Native</span>
            </div>
          </div>
        </LemonContainer>
      </section>

      {/* Features Section */}
      <section style={{ ...Lemon.paddingTop(100), ...Lemon.paddingBottom(100), ...Lemon.backgroundColor("#0a0a0a") }}>
        <LemonContainer>
          <h2 style={{ ...Lemon.fontSize(40), ...Lemon.textAlign("center"), ...Lemon.marginBottom(60) }}>
            Why Choose Lemon?
          </h2>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(300px, 1fr))"), ...Lemon.gap(32) }}>
            <LemonCard title="Blazing Fast">
              <Zap size={32} style={{ ...Lemon.color("#facc15"), ...Lemon.marginBottom(16) }} />
              <p>Zero-runtime overhead with our proxy-based styling engine. Your apps stay snappy and responsive.</p>
            </LemonCard>
            <LemonCard title="Type Safe">
              <Shield size={32} style={{ ...Lemon.color("#facc15"), ...Lemon.marginBottom(16) }} />
              <p>Fully typed styles ensure you never make a typo. Enjoy autocompletion for all your design tokens.</p>
            </LemonCard>
            <LemonCard title="Stunning Results">
              <Sparkles size={32} style={{ ...Lemon.color("#facc15"), ...Lemon.marginBottom(16) }} />
              <p>Create professional-grade UIs with ease using our curated set of components and utilities.</p>
            </LemonCard>
          </div>
        </LemonContainer>
      </section>

      {/* Visual Showcase */}
      <section style={{ ...Lemon.paddingTop(100), ...Lemon.paddingBottom(100) }}>
        <LemonContainer>
          <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(60), ...Lemon.flexWrap("wrap") }}>
            <div style={{ ...Lemon.flex(1), ...Lemon.minWidth(300) }}>
              <h2 style={{ ...Lemon.fontSize(48), ...Lemon.marginBottom(24) }}>Design with Precision</h2>
              <p style={{ ...Lemon.fontSize(18), ...Lemon.color("#999"), ...Lemon.marginBottom(32) }}>
                Lemon CSS allows you to define your styles in a way that feels natural to developers.
                Whether you're building for the browser or for native devices, the experience is the same.
              </p>
              <Link href="/how-it-works">
                <LemonButton variant="primary">Learn How It Works</LemonButton>
              </Link>
            </div>
            <div style={{ ...Lemon.flex(1), ...Lemon.minWidth(300), ...Lemon.position("relative"), ...Lemon.height(400), ...Lemon.borderRadius(24), ...Lemon.overflow("hidden") }}>
              <Image
                src="/images/lemon-2.png"
                alt="Lemon Showcase"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </LemonContainer>
      </section>

      {/* Footer */}
      <footer style={{ ...Lemon.paddingTop(60), ...Lemon.paddingBottom(60), ...Lemon.borderTop("1px solid #222"), ...Lemon.textAlign("center") }}>
        <LemonContainer>
          <p style={{ ...Lemon.color("#666") }}>
            &copy; {new Date().getFullYear()} Lemon CSS. Built for professionals.
          </p>
        </LemonContainer>
      </footer>
    </div>
  );
}
