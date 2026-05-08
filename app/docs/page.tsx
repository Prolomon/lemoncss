import React from "react";
import { LemonContainer } from "@/components/lemon-ui/LemonContainer";
import { LemonCard } from "@/components/lemon-ui/LemonCard";
import { LemonButton } from "@/components/lemon-ui/LemonButton";
import { Lemon } from "@/lib/lemon";
import { Code, Layout, MousePointer2, Type } from "lucide-react";

export default function DocsPage() {
  return (
    <div style={{ ...Lemon.minHeight("100vh"), ...Lemon.backgroundColor("#000"), ...Lemon.color("#fff"), ...Lemon.paddingTop(60), ...Lemon.paddingBottom(100) }}>
      <LemonContainer>
        <div style={{ ...Lemon.marginBottom(60) }}>
          <h1 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.marginBottom(16) }}>Documentation</h1>
          <p style={{ ...Lemon.fontSize(20), ...Lemon.color("#999") }}>Explore the Lemon UI components and learn how to use the proxy styling engine.</p>
        </div>

        <div style={{ ...Lemon.display("grid"), ...Lemon.gridTemplateColumns("repeat(auto-fit, minmax(400px, 1fr))"), ...Lemon.gap(40) }}>
          {/* LemonButton Documentation */}
          <LemonCard title="LemonButton">
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12), ...Lemon.marginBottom(16) }}>
              <MousePointer2 size={20} style={{ ...Lemon.color("#facc15") }} />
              <span>Interactive button component with variants.</span>
            </div>
            <div style={{ ...Lemon.display("flex"), ...Lemon.gap(12), ...Lemon.marginBottom(24) }}>
              <LemonButton variant="primary">Primary</LemonButton>
              <LemonButton variant="secondary">Secondary</LemonButton>
              <LemonButton variant="danger">Danger</LemonButton>
            </div>
            <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.fontSize(14), ...Lemon.overflow("auto") }}>
              <code>{`<LemonButton variant="primary">
  Click Me
</LemonButton>`}</code>
            </pre>
          </LemonCard>

          {/* LemonCard Documentation */}
          <LemonCard title="LemonCard">
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12), ...Lemon.marginBottom(16) }}>
              <Layout size={20} style={{ ...Lemon.color("#facc15") }} />
              <span>Container for content with a consistent style.</span>
            </div>
            <div style={{ ...Lemon.marginBottom(24) }}>
              <LemonCard title="Example Card" style={{ ...Lemon.maxWidth(300) }}>
                This is a sample card content.
              </LemonCard>
            </div>
            <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.fontSize(14), ...Lemon.overflow("auto") }}>
              <code>{`<LemonCard title="Hello">
  Content goes here
</LemonCard>`}</code>
            </pre>
          </LemonCard>

          {/* Lemon Styling Engine Documentation */}
          <LemonCard title="The Proxy Pattern">
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12), ...Lemon.marginBottom(16) }}>
              <Code size={20} style={{ ...Lemon.color("#facc15") }} />
              <span>Dynamic styling via Proxy.</span>
            </div>
            <p style={{ ...Lemon.marginBottom(16) }}>
              Use the <code>Lemon</code> object to generate styles dynamically. It supports camelCase transformation and configuration-based values.
            </p>
            <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.fontSize(14), ...Lemon.overflow("auto") }}>
              <code>{`import { Lemon } from "@/lib/lemon";

const styles = {
  ...Lemon.background("primary"),
  ...Lemon.padding(20),
  ...Lemon.borderRadius(12)
};`}</code>
            </pre>
          </LemonCard>

          {/* Typography Documentation */}
          <LemonCard title="Typography">
            <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12), ...Lemon.marginBottom(16) }}>
              <Type size={20} style={{ ...Lemon.color("#facc15") }} />
              <span>Type-safe font sizing.</span>
            </div>
            <div style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.gap(8), ...Lemon.marginBottom(24) }}>
              <div style={{ ...Lemon.fontSize(32) }}>Heading 1</div>
              <div style={{ ...Lemon.fontSize(24) }}>Heading 2</div>
              <div style={{ ...Lemon.fontSize(16) }}>Body text</div>
            </div>
            <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.fontSize(14), ...Lemon.overflow("auto") }}>
              <code>{`<div style={{ ...Lemon.fontSize(32) }}>
  Large Text
</div>`}</code>
            </pre>
          </LemonCard>
        </div>
      </LemonContainer>
    </div>
  );
}
