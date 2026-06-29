import { Lemon } from "@/lib/lemon";
import { LemonContainer } from "@/components/lemon-ui/LemonContainer";
import { LemonCard } from "@/components/lemon-ui/LemonCard";
import { Cpu, Zap, Smartphone, Globe, Layers, Repeat } from "lucide-react";

export default function HowItWorks() {
  return (
    <section style={{ ...Lemon.backgroundColor("#000"), ...Lemon.minHeight("100vh"), ...Lemon.padding("80px 40px") }}>
      <div style={{ ...Lemon.maxWidth(1000), ...Lemon.margin("0 auto") }}>
        <h1 style={{ ...Lemon.fontSize(64), ...Lemon.fontWeight("900"), ...Lemon.color("#fff"), ...Lemon.marginBottom(24), ...Lemon.textAlign("center") }}>
          How <span style={{ ...Lemon.color("#facc15") }}>Lemon</span> Works
        </h1>
        <p style={{ ...Lemon.fontSize(20), ...Lemon.color("#999"), ...Lemon.textAlign("center"), ...Lemon.marginBottom(80), ...Lemon.lineHeight(1.6) }}>
          Deep dive into the architecture of Lemon CSS and its unique multi-platform capabilities.
        </p>

        {/* The Proxy Engine */}
        <div style={{ ...Lemon.marginBottom(80) }}>
          <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(32) }}>
            <Cpu color="#facc15" size={40} />
            <h2 style={{ ...Lemon.fontSize(32), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff") }}>The Proxy Engine</h2>
          </div>
          <LemonCard>
            <p style={{ ...Lemon.marginBottom(24), ...Lemon.lineHeight(1.7) }}>
              Lemon CSS uses JavaScript Proxy objects to intercept property accesses. When you access <code>Lemon.backgroundColor("primary")</code>, the proxy captures the "backgroundColor" property and the "primary" argument.
            </p>
            <pre style={{ ...Lemon.background("#050505"), ...Lemon.padding(24), ...Lemon.borderRadius(12), ...Lemon.border("1px solid #222"), ...Lemon.overflow("auto") }}>
              <code style={{ ...Lemon.color("#ccc") }}>{`// Simplified internal logic
const Lemon = new Proxy({}, {
  get(target, prop) {
    return (value) => ({ [prop]: resolveValue(value) });
  }
});`}</code>
            </pre>
          </LemonCard>
        </div>

        {/* Platform Synergy */}
        <div style={{ ...Lemon.marginBottom(80) }}>
          <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(32) }}>
            <Repeat color="#facc15" size={40} />
            <h2 style={{ ...Lemon.fontSize(32), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff") }}>Platform Synergy</h2>
          </div>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("1fr 1fr"), ...Lemon.gap(32) }}>
            <LemonCard title="Web React">
              <p style={{ ...Lemon.marginBottom(20) }}>Maps to standard CSS properties. Supports hover, media queries (via runtime detection), and all CSS units.</p>
              <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(8), ...Lemon.color("#facc15") }}>
                <Globe size={18} />
                <span>Standard CSS Engine</span>
              </div>
            </LemonCard>
            <LemonCard title="Mobile React Native">
              <p style={{ ...Lemon.marginBottom(20) }}>Maps to Yoga layout properties. Automatically handles unit conversions and platform-specific styling constraints.</p>
              <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(8), ...Lemon.color("#facc15") }}>
                <Smartphone size={18} />
                <span>Yoga Layout Engine</span>
              </div>
            </LemonCard>
          </div>
        </div>

        {/* Why it beats conventional styles */}
        <div style={{ ...Lemon.marginBottom(80) }}>
          <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(32) }}>
            <Zap color="#facc15" size={40} />
            <h2 style={{ ...Lemon.fontSize(32), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff") }}>The Competitive Edge</h2>
          </div>
          <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(300px, 1fr))"), ...Lemon.gap(24) }}>
            <EdgeCard
              title="vs Tailwind"
              text="No massive CSS files. No need for NativeWind or complex configurations for React Native."
            />
            <EdgeCard
              title="vs CSS-in-JS"
              text="Zero runtime overhead for class generation. Instant styles via pure JS object mapping."
            />
            <EdgeCard
              title="vs StyleSheets"
              text="Full composability and dynamic theming without re-declaring StyleSheet.create."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EdgeCard({ title, text }: { title: string, text: string }) {
  return (
    <div style={{ ...Lemon.padding(24), ...Lemon.background("#111"), ...Lemon.borderRadius(16), ...Lemon.border("1px solid #222") }}>
      <h3 style={{ ...Lemon.color("#facc15"), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(12) }}>{title}</h3>
      <p style={{ ...Lemon.color("#999"), ...Lemon.fontSize(14), ...Lemon.lineHeight(1.5) }}>{text}</p>
    </div>
  );
}
