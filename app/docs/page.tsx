"use client"

import { useState } from "react";
import { Lemon } from "@/lib/lemon";
import { LemonContainer } from "@/components/lemon-ui/LemonContainer";
import { LemonButton } from "@/components/lemon-ui/LemonButton";
import { LemonCard } from "@/components/lemon-ui/LemonCard";
import { LemonInput } from "@/components/lemon-ui/LemonInput";
import { LemonBadge } from "@/components/lemon-ui/LemonBadge";
import { LemonText } from "@/components/lemon-ui/LemonText";
import { LemonSwitch } from "@/components/lemon-ui/LemonSwitch";
import { Code, Book, Terminal, Download, Box, Layout, MousePointer, Type, ToggleLeft } from "lucide-react";

const components = [
  { id: "getting-started", name: "Getting Started", icon: <Download size={18} /> },
  { id: "lemon-button", name: "Button", icon: <MousePointer size={18} /> },
  { id: "lemon-card", name: "Card", icon: <Box size={18} /> },
  { id: "lemon-input", name: "Input", icon: <Type size={18} /> },
  { id: "lemon-badge", name: "Badge", icon: <Layout size={18} /> },
  { id: "lemon-switch", name: "Switch", icon: <ToggleLeft size={18} /> },
];

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("getting-started");

  return (
    <div style={{ ...Lemon.display("flex"), ...Lemon.minHeight("100vh"), ...Lemon.backgroundColor("#000") }}>
      {/* Sidebar */}
      <aside style={{
        ...Lemon.width(300),
        ...Lemon.borderRight("1px solid #111"),
        ...Lemon.padding(32),
        ...Lemon.display("flex"),
        ...Lemon.flexDirection("column"),
        ...Lemon.gap(8),
        ...Lemon.position("sticky"),
        ...Lemon.top(64),
        ...Lemon.height("calc(100vh - 64px)")
      }}>
        <div style={{ ...Lemon.marginBottom(24), ...Lemon.padding("0 12px") }}>
          <h2 style={{ ...Lemon.fontSize(12), ...Lemon.fontWeight("900"), ...Lemon.color("#555"), ...Lemon.textTransform("uppercase"), ...Lemon.letterSpacing("0.1em") }}>
            Documentation
          </h2>
        </div>
        {components.map((comp) => (
          <button
            key={comp.id}
            onClick={() => setActiveTab(comp.id)}
            style={{
              ...Lemon.display("flex"),
              ...Lemon.alignItems("center"),
              ...Lemon.gap(12),
              ...Lemon.padding("10px 12px"),
              ...Lemon.borderRadius(8),
              ...Lemon.border("none"),
              ...Lemon.textAlign("left"),
              ...Lemon.cursor("pointer"),
              ...Lemon.width("100%"),
              ...Lemon.transition("all 0.2s"),
              ...Lemon.backgroundColor(activeTab === comp.id ? "rgba(250, 204, 21, 0.1)" : "transparent"),
              ...Lemon.color(activeTab === comp.id ? "#facc15" : "#999"),
            }}
          >
            {comp.icon}
            <span style={{ ...Lemon.fontWeight(activeTab === comp.id ? "600" : "400") }}>{comp.name}</span>
          </button>
        ))}
      </aside>

      {/* Content */}
      <main style={{ ...Lemon.flex(1), ...Lemon.padding(64), ...Lemon.maxWidth(1000) }}>
        {activeTab === "getting-started" && <GettingStarted />}
        {activeTab === "lemon-button" && <ButtonDocs />}
        {activeTab === "lemon-card" && <CardDocs />}
        {activeTab === "lemon-input" && <InputDocs />}
        {activeTab === "lemon-badge" && <BadgeDocs />}
        {activeTab === "lemon-switch" && <SwitchDocs />}
      </main>
    </div>
  );
}

function GettingStarted() {
  return (
    <div>
      <h1 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff"), ...Lemon.marginBottom(16) }}>Getting Started</h1>
      <LemonText size="lg" style={{ ...Lemon.marginBottom(32) }}>
        Learn how to integrate Lemon into your project and start building high-performance, cross-platform UIs.
      </LemonText>

      <LemonCard title="1. Download the Utility" style={{ ...Lemon.marginBottom(24) }}>
        <p style={{ ...Lemon.marginBottom(16) }}>
          First, you need to add the Lemon proxy utility to your project. You can find the core logic in our repository.
        </p>
        <div style={{ ...Lemon.background("#050505"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.border("1px solid #222") }}>
          <code style={{ ...Lemon.color("#facc15") }}>git clone https://github.com/prolomon/lemon-core.git</code>
        </div>
      </LemonCard>

      <LemonCard title="2. Setup Location" style={{ ...Lemon.marginBottom(24) }}>
        <p style={{ ...Lemon.marginBottom(16) }}>
          Place the <code style={{ ...Lemon.color("#facc15") }}>lemon/</code> folder inside your <code style={{ ...Lemon.color("#facc15") }}>lib/</code> or <code style={{ ...Lemon.color("#facc15") }}>utils/</code> directory.
        </p>
        <pre style={{ ...Lemon.background("#050505"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.fontSize(14) }}>
          {`src/
  lib/
    lemon/
      index.ts
      lemon.config.ts`}
        </pre>
      </LemonCard>

      <LemonCard title="3. Universal Import">
        <p style={{ ...Lemon.marginBottom(16) }}>
          The most important step is to import the <code style={{ ...Lemon.color("#facc15") }}>Lemon</code> proxy into every component where you intend to use it. This provides the styling engine access to your components.
        </p>
        <div style={{ ...Lemon.background("#050505"), ...Lemon.padding(16), ...Lemon.borderRadius(8), ...Lemon.border("1px solid #222") }}>
          <code style={{ ...Lemon.color("#facc15") }}>{`import { Lemon } from "@/lib/lemon";`}</code>
        </div>
      </LemonCard>
    </div>
  );
}

function ComponentDocsLayout({ title, description, usage, children }: { title: string, description: string, usage: string, children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <h1 style={{ ...Lemon.fontSize(48), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff"), ...Lemon.marginBottom(16) }}>{title}</h1>
      <LemonText size="lg" style={{ ...Lemon.marginBottom(40) }}>{description}</LemonText>

      <div style={{ ...Lemon.marginBottom(48) }}>
        <h2 style={{ ...Lemon.fontSize(24), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff"), ...Lemon.marginBottom(20) }}>Preview</h2>
        <div style={{
          ...Lemon.padding(48),
          ...Lemon.background("#050505"),
          ...Lemon.borderRadius(16),
          ...Lemon.border("1px solid #111"),
          ...Lemon.display("flex"),
          ...Lemon.justifyContent("center"),
          ...Lemon.alignItems("center")
        }}>
          {children}
        </div>
      </div>

      <div>
        <div style={{ ...Lemon.display("flex"), ...Lemon.justifyContent("space-between"), ...Lemon.alignItems("center"), ...Lemon.marginBottom(20) }}>
          <h2 style={{ ...Lemon.fontSize(24), ...Lemon.fontWeight("bold"), ...Lemon.color("#fff") }}>Usage</h2>
          <button
            onClick={copyCode}
            style={{
              ...Lemon.backgroundColor(copied ? "#22c55e" : "#333"),
              ...Lemon.color("#fff"),
              ...Lemon.border("none"),
              ...Lemon.padding("6px 12px"),
              ...Lemon.borderRadius(6),
              ...Lemon.cursor("pointer"),
              ...Lemon.fontSize(12),
              ...Lemon.fontWeight("bold")
            }}
          >
            {copied ? "COPIED!" : "COPY CODE"}
          </button>
        </div>
        <pre style={{ ...Lemon.background("#111"), ...Lemon.padding(24), ...Lemon.borderRadius(16), ...Lemon.fontSize(14), ...Lemon.overflow("auto"), ...Lemon.border("1px solid #222") }}>
          <code style={{ ...Lemon.color("#ccc") }}>{usage}</code>
        </pre>
      </div>
    </div>
  );
}

function ButtonDocs() {
  return (
    <ComponentDocsLayout
      title="LemonButton"
      description="A highly customizable button component with built-in variant support and proxy styling."
      usage={`import { LemonButton } from "@/components/lemon-ui/LemonButton";

<LemonButton variant="primary" onClick={() => console.log("Clicked!")}>
  Click Me
</LemonButton>`}
    >
      <div style={{ ...Lemon.display("flex"), ...Lemon.gap(16) }}>
        <LemonButton variant="primary">Primary</LemonButton>
        <LemonButton variant="secondary">Secondary</LemonButton>
        <LemonButton variant="danger">Danger</LemonButton>
      </div>
    </ComponentDocsLayout>
  );
}

function CardDocs() {
  return (
    <ComponentDocsLayout
      title="LemonCard"
      description="A flexible container for grouping content, featuring a dark aesthetic and subtle borders."
      usage={`import { LemonCard } from "@/components/lemon-ui/LemonCard";

<LemonCard title="Project Alpha">
  <p>Detailed overview of the current progress.</p>
</LemonCard>`}
    >
      <LemonCard title="Example Card" style={{ ...Lemon.width(300) }}>
        <p>This is how a standard card looks within the Lemon ecosystem.</p>
      </LemonCard>
    </ComponentDocsLayout>
  );
}

function InputDocs() {
  return (
    <ComponentDocsLayout
      title="LemonInput"
      description="A sleek, themed text input with focus states and label support."
      usage={`import { LemonInput } from "@/components/lemon-ui/LemonInput";

<LemonInput
  label="Email Address"
  placeholder="Enter your email"
/>`}
    >
      <LemonInput label="Username" placeholder="johndoe" style={{ ...Lemon.width(300) }} />
    </ComponentDocsLayout>
  );
}

function BadgeDocs() {
  return (
    <ComponentDocsLayout
      title="LemonBadge"
      description="Compact indicator for status, tags, or counts."
      usage={`import { LemonBadge } from "@/components/lemon-ui/LemonBadge";

<LemonBadge color="success">Active</LemonBadge>`}
    >
      <div style={{ ...Lemon.display("flex"), ...Lemon.gap(12) }}>
        <LemonBadge color="primary">New</LemonBadge>
        <LemonBadge color="success">Completed</LemonBadge>
        <LemonBadge color="danger">Failed</LemonBadge>
      </div>
    </ComponentDocsLayout>
  );
}

function SwitchDocs() {
  const [enabled, setEnabled] = useState(true);
  return (
    <ComponentDocsLayout
      title="LemonSwitch"
      description="A beautiful toggle switch with smooth animations."
      usage={`import { LemonSwitch } from "@/components/lemon-ui/LemonSwitch";

const [checked, setChecked] = useState(false);

<LemonSwitch
  label="Enable Notifications"
  checked={checked}
  onChange={setChecked}
/>`}
    >
      <LemonSwitch label="System Status" checked={enabled} onChange={setEnabled} />
    </ComponentDocsLayout>
  );
}
