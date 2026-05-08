import React from "react";
import { LemonContainer } from "@/components/lemon-ui/LemonContainer";
import { LemonCard } from "@/components/lemon-ui/LemonCard";
import { Lemon } from "@/lib/lemon";
import { Settings, Cpu, Layers, Smartphone, Globe } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div style={{ ...Lemon.minHeight("100vh"), ...Lemon.backgroundColor("#000"), ...Lemon.color("#fff"), ...Lemon.paddingTop(60), ...Lemon.paddingBottom(100) }}>
      <LemonContainer>
        <div style={{ ...Lemon.marginBottom(60), ...Lemon.textAlign("center") }}>
          <h1 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(16) }}>How It Works</h1>
          <p style={{ ...Lemon.fontSize(20), ...Lemon.color("#999"), ...Lemon.maxWidth(800), ...Lemon.marginLeft("auto"), ...Lemon.marginRight("auto") }}>
            Deep dive into the architecture of Lemon CSS and its unique multi-platform capabilities.
          </p>
        </div>

        <div style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.gap(48) }}>
          <section>
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(24) }}>
              <Cpu size={32} style={{ ...Lemon.color("#facc15") }} />
              <h2 style={{ ...Lemon.fontSize(32) }}>The Proxy Engine</h2>
            </div>
            <LemonCard>
              <p style={{ ...Lemon.marginBottom(16), ...Lemon.lineHeight(1.6) }}>
                Lemon CSS uses JavaScript <code>Proxy</code> objects to intercept property accesses.
                When you access <code>Lemon.backgroundColor("primary")</code>, the proxy captures the
                "backgroundColor" property and the "primary" argument.
              </p>
              <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.fontSize(14), ...Lemon.overflow("auto") }}>
                <code>{`// Simplified internal logic
const Lemon = new Proxy({}, {
  get(target, prop) {
    return (value) => ({ [prop]: resolveValue(value) });
  }
});`}</code>
              </pre>
            </LemonCard>
          </section>

          <section>
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(24) }}>
              <Globe size={32} style={{ ...Lemon.color("#facc15") }} />
              <h2 style={{ ...Lemon.fontSize(32) }}>Web & Mobile Synergy</h2>
            </div>
            <LemonCard>
              <p style={{ ...Lemon.marginBottom(16), ...Lemon.lineHeight(1.6) }}>
                The core philosophy of Lemon is <strong>Write Once, Style Everywhere</strong>.
                Because the output is a plain JavaScript object, it is compatible with both
                React's <code>style</code> prop (for Web) and React Native's <code>style</code> prop (for Mobile).
              </p>
              <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("1fr 1fr"), ...Lemon.gap(24), ...Lemon.marginTop(16) }}>
                <div style={{ ...Lemon.padding(16), ...Lemon.border("1px solid #333"), ...Lemon.borderRadius(8) }}>
                  <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(8), ...Lemon.marginBottom(8) }}>
                    <Globe size={16} /> <strong>Web</strong>
                  </div>
                  <code style={{ ...Lemon.fontSize(12) }}>{`<div style={Lemon.padding(16)} />`}</code>
                </div>
                <div style={{ ...Lemon.padding(16), ...Lemon.border("1px solid #333"), ...Lemon.borderRadius(8) }}>
                  <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(8), ...Lemon.marginBottom(8) }}>
                    <Smartphone size={16} /> <strong>Mobile</strong>
                  </div>
                  <code style={{ ...Lemon.fontSize(12) }}>{`<View style={Lemon.padding(16)} />`}</code>
                </div>
              </div>
            </LemonCard>
          </section>

          <section>
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(24) }}>
              <Settings size={32} style={{ ...Lemon.color("#facc15") }} />
              <h2 style={{ ...Lemon.fontSize(32) }}>Config Resolution</h2>
            </div>
            <LemonCard>
              <p style={{ ...Lemon.marginBottom(16), ...Lemon.lineHeight(1.6) }}>
                The engine checks your <code>lemon.config.ts</code> for predefined tokens.
                If a property access matches a config key (like "primary" for colors or "lg" for sizes),
                it automatically resolves to the configured value.
              </p>
              <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("1fr 1fr"), ...Lemon.gap(24) }}>
                <div>
                  <h4 style={{ ...Lemon.marginBottom(8) }}>Config</h4>
                  <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(12), ...Lemon.borderRadius(8), ...Lemon.fontSize(12) }}>
                    <code>{`colors: {
  primary: "#007bff"
}`}</code>
                  </pre>
                </div>
                <div>
                  <h4 style={{ ...Lemon.marginBottom(8) }}>Result</h4>
                  <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(12), ...Lemon.borderRadius(8), ...Lemon.fontSize(12) }}>
                    <code>{`Lemon.color.primary
// -> { color: "#007bff" }`}</code>
                  </pre>
                </div>
              </div>
            </LemonCard>
          </section>

          <section>
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(16), ...Lemon.marginBottom(24) }}>
              <Layers size={32} style={{ ...Lemon.color("#facc15") }} />
              <h2 style={{ ...Lemon.fontSize(32) }}>Zero Runtime CSS</h2>
            </div>
            <LemonCard>
              <p style={{ ...Lemon.marginBottom(16), ...Lemon.lineHeight(1.6) }}>
                Unlike traditional CSS-in-JS libraries that inject style tags, Lemon generates
                plain JavaScript objects that are passed directly to the <code>style</code> attribute.
                This means zero style recalculations and no extra DOM elements.
              </p>
            </LemonCard>
          </section>
        </div>
      </LemonContainer>
    </div>
  );
}
