import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Lemon } from "@/lib/lemon";
import { LemonButton } from "@/components/lemon-ui/LemonButton";
import { LemonContainer } from "@/components/lemon-ui/LemonContainer";
import { CheckCircle, Zap, Layout, Smartphone, Globe, Code, Layers } from "lucide-react";

export default function Home() {
  return (
    <section style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.width("100%"), ...Lemon.backgroundColor("#000") }}>
      {/* Hero Section */}
      <LemonContainer style={{ ...Lemon.padding("80px 40px"), ...Lemon.textAlign("center"), ...Lemon.borderBottom("1px solid #111") }}>
        <h1 style={{ ...Lemon.fontSize(72), ...Lemon.fontWeight("900"), ...Lemon.marginBottom(24), ...Lemon.color("#fff"), ...Lemon.lineHeight(1.1) }}>
          Style with <span style={{ ...Lemon.color("#facc15") }}>Precision</span>.<br />
          Deliver with <span style={{ ...Lemon.color("#facc15") }}>Speed</span>.
        </h1>
        <p style={{ ...Lemon.fontSize(24), ...Lemon.color("#999"), ...Lemon.maxWidth(800), ...Lemon.margin("0 auto 40px auto") }}>
          The ultimate proxy-based styling engine for React and React Native.
          Write styles once, deploy everywhere with zero overhead.
        </p>
        <div style={{ ...Lemon.display("flex"), ...Lemon.gap(16), ...Lemon.justifyContent("center") }}>
          <Link
            className={buttonStyles({
              variant: "solid",
              radius: "full",
            })}
            href="/docs"
            style={{ ...Lemon.backgroundColor("#facc15"), ...Lemon.color("#000"), ...Lemon.padding("24px 48px"), ...Lemon.fontSize(18), ...Lemon.fontWeight("bold") }}
          >
            Get Started
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
            style={{ ...Lemon.borderColor("#facc15"), ...Lemon.color("#facc15"), ...Lemon.padding("24px 48px"), ...Lemon.fontSize(18), ...Lemon.fontWeight("bold") }}
          >
            GitHub
          </Link>
        </div>
      </LemonContainer>

      {/* Showcase Section */}
      <section style={{ ...Lemon.padding("100px 40px"), ...Lemon.backgroundColor("#050505") }}>
        <div style={{ ...Lemon.maxWidth(1400), ...Lemon.margin("0 auto") }}>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(300px, 1fr))"), ...Lemon.gap(40), ...Lemon.alignItems("center") }}>
            <div>
              <h2 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(24), ...Lemon.color("#fff") }}>
                Universal Showcase
              </h2>
              <p style={{ ...Lemon.fontSize(18), ...Lemon.color("#ccc"), ...Lemon.marginBottom(32), ...Lemon.lineHeight(1.6) }}>
                Lemon's proxy engine intelligently translates style properties between web and mobile environments.
                Whether you're targeting the DOM or Yoga, Lemon ensures your UI remains pixel-perfect.
              </p>
              <ul style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.gap(16) }}>
                {[
                  "Automatic CamelCase transformation",
                  "Platform-specific property mapping",
                  "Lightweight zero-dependency core",
                  "Full TypeScript support"
                ].map((item, i) => (
                  <li key={i} style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12), ...Lemon.color("#fff") }}>
                    <CheckCircle color="#facc15" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ ...Lemon.position("relative"), ...Lemon.borderRadius(24), ...Lemon.overflow("hidden"), ...Lemon.border("1px solid #222"), ...Lemon.boxShadow("0 20px 50px rgba(0,0,0,0.5)") }}>
              <Image
                src="/images/lemon-1.png"
                alt="Lemon UI Showcase"
                width={700}
                height={500}
                style={{ ...Lemon.width("100%"), ...Lemon.display("block") }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ ...Lemon.padding("100px 40px"), ...Lemon.backgroundColor("#000") }}>
        <div style={{ ...Lemon.maxWidth(1400), ...Lemon.margin("0 auto") }}>
          <h2 style={{ ...Lemon.fontSize(40), ...Lemon.fontWeight("bold"), ...Lemon.textAlign("center"), ...Lemon.marginBottom(60), ...Lemon.color("#fff") }}>
            Why Choose Lemon?
          </h2>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(350px, 1fr))"), ...Lemon.gap(32) }}>
            <BenefitCard
              icon={<Smartphone color="#facc15" size={32} />}
              title="React Native Native"
              description="Unlike Tailwind which requires complex wrappers for mobile, Lemon speaks the native language of React Native styles while maintaining a CSS-like developer experience."
            />
            <BenefitCard
              icon={<Globe color="#facc15" size={32} />}
              title="Web Standards"
              description="On the web, Lemon maps directly to inline styles, making it compatible with any React framework without the need for complex build steps or CSS-in-JS runtimes."
            />
            <BenefitCard
              icon={<Zap color="#facc15" size={32} />}
              title="The Proxy Advantage"
              description="By using JS Proxies, Lemon intercepts property access at runtime. This allows for dynamic themes and responsive values without generating massive CSS files."
            />
          </div>
        </div>
      </section>

      {/* Styling Concept Section */}
      <section style={{ ...Lemon.padding("100px 40px"), ...Lemon.backgroundColor("#050505") }}>
        <div style={{ ...Lemon.maxWidth(1400), ...Lemon.margin("0 auto") }}>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(400px, 1fr))"), ...Lemon.gap(60), ...Lemon.alignItems("center") }}>
            <div style={{ ...Lemon.background("#111"), ...Lemon.padding(40), ...Lemon.borderRadius(24), ...Lemon.border("1px solid #222") }}>
              <pre style={{ ...Lemon.color("#facc15"), ...Lemon.fontSize(16), ...Lemon.overflow("auto") }}>
                <code>{`// The Lemon Styling Pattern
const styles = {
  ...Lemon.background("primary"),
  ...Lemon.padding(24),
  ...Lemon.borderRadius(12),
  ...Lemon.shadow("lg"),
  ...Lemon.flexCenter()
};

// Works on Web:
<div style={styles} />

// Works on Mobile:
<View style={styles} />`}</code>
              </pre>
            </div>
            <div>
              <h2 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(24), ...Lemon.color("#fff") }}>
                The Styling Concept
              </h2>
              <p style={{ ...Lemon.fontSize(18), ...Lemon.color("#ccc"), ...Lemon.marginBottom(24), ...Lemon.lineHeight(1.6) }}>
                Lemon moves styling logic from strings and utility classes into pure JavaScript objects. This provides several key advantages over conventional methods:
              </p>
              <div style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.gap(20) }}>
                <ConceptItem
                  title="Dynamic Resolution"
                  text="Styles are calculated at runtime, allowing for instant theme switching and responsive adjustments based on container size, not just viewport."
                />
                <ConceptItem
                  title="No Context Needed"
                  text="Eliminate the need for ThemeProviders and expensive context lookups. Lemon's configuration is global and static."
                />
                <ConceptItem
                  title="Composable Styles"
                  text="Since everything is just an object, you can use standard JS patterns like spread operators and functional composition to build complex UIs."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design with Precision Section */}
      <section style={{ ...Lemon.padding("100px 40px"), ...Lemon.backgroundColor("#000") }}>
        <div style={{ ...Lemon.maxWidth(1400), ...Lemon.margin("0 auto") }}>
          <div style={{ ...Lemon.textAlign("center"), ...Lemon.marginBottom(80) }}>
            <h2 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(24), ...Lemon.color("#fff") }}>
              Design with Precision
            </h2>
            <p style={{ ...Lemon.fontSize(20), ...Lemon.color("#999"), ...Lemon.maxWidth(800), ...Lemon.margin("0 auto") }}>
              Lemon provides a set of high-level abstractions that ensure consistency across your entire design system while allowing for granular control when you need it.
            </p>
          </div>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(300px, 1fr))"), ...Lemon.gap(40) }}>
             <PrecisionFeature
               icon={<Layers color="#facc15" size={28} />}
               title="Layered Architecture"
               text="Separate your design tokens from your component logic."
             />
             <PrecisionFeature
               icon={<Code color="#facc15" size={28} />}
               title="Developer First"
               text="Autocomplete and type-safety for every single style property."
             />
             <PrecisionFeature
               icon={<Layout color="#facc15" size={28} />}
               title="Grid-Based System"
               text="Built-in support for sophisticated layout patterns on any platform."
             />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ ...Lemon.padding("120px 40px"), ...Lemon.backgroundColor("#facc15"), ...Lemon.textAlign("center") }}>
        <h2 style={{ ...Lemon.fontSize(56), ...Lemon.fontWeight("900"), ...Lemon.color("#000"), ...Lemon.marginBottom(32) }}>
          Ready to squeeze more out of your UI?
        </h2>
        <Link
          href="/docs"
          style={{ ...Lemon.backgroundColor("#000"), ...Lemon.color("#fff"), ...Lemon.padding("20px 60px"), ...Lemon.borderRadius(99), ...Lemon.fontSize(20), ...Lemon.fontWeight("bold") }}
        >
          Start Building Now
        </Link>
      </section>
    </section>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div style={{ ...Lemon.padding(40), ...Lemon.background("#111"), ...Lemon.borderRadius(24), ...Lemon.border("1px solid #222") }}>
      <div style={{ ...Lemon.marginBottom(24) }}>{icon}</div>
      <h3 style={{ ...Lemon.fontSize(24), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(16), ...Lemon.color("#fff") }}>{title}</h3>
      <p style={{ ...Lemon.color("#999"), ...Lemon.lineHeight(1.6), ...Lemon.fontSize(16) }}>{description}</p>
    </div>
  );
}

function ConceptItem({ title, text }: { title: string, text: string }) {
  return (
    <div style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.gap(4) }}>
      <h4 style={{ ...Lemon.fontSize(18), ...Lemon.fontWeight("bold"), ...Lemon.color("#facc15") }}>{title}</h4>
      <p style={{ ...Lemon.color("#ccc"), ...Lemon.lineHeight(1.5) }}>{text}</p>
    </div>
  );
}

function PrecisionFeature({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div style={{ ...Lemon.textAlign("center") }}>
      <div style={{ ...Lemon.display("flex"), ...Lemon.justifyContent("center"), ...Lemon.marginBottom(20) }}>
        <div style={{ ...Lemon.padding(16), ...Lemon.background("#111"), ...Lemon.borderRadius(16), ...Lemon.border("1px solid #222") }}>
          {icon}
        </div>
      </div>
      <h3 style={{ ...Lemon.fontSize(22), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(12), ...Lemon.color("#fff") }}>{title}</h3>
      <p style={{ ...Lemon.color("#777"), ...Lemon.lineHeight(1.5) }}>{text}</p>
    </div>
  );
}
