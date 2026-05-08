import { Lemon } from "@/lib/lemon";

export const LemonBadge = ({
  children,
  color = "primary"
}: {
  children: React.ReactNode,
  color?: "primary" | "success" | "danger"
}) => {
  const colors = {
    primary: { bg: "rgba(250, 204, 21, 0.1)", text: "#facc15", border: "rgba(250, 204, 21, 0.2)" },
    success: { bg: "rgba(34, 197, 94, 0.1)", text: "#22c55e", border: "rgba(34, 197, 94, 0.2)" },
    danger: { bg: "rgba(239, 68, 68, 0.1)", text: "#ef4444", border: "rgba(239, 68, 68, 0.2)" },
  };

  const { bg, text, border } = colors[color];

  return (
    <span style={{
      ...Lemon.display("inline-flex"),
      ...Lemon.alignItems("center"),
      ...Lemon.padding("4px 12px"),
      ...Lemon.borderRadius(99),
      ...Lemon.fontSize(12),
      ...Lemon.fontWeight("bold"),
      ...Lemon.backgroundColor(bg),
      ...Lemon.color(text),
      ...Lemon.border(`1px solid ${border}`),
      ...Lemon.textTransform("uppercase"),
      ...Lemon.letterSpacing("0.05em")
    }}>
      {children}
    </span>
  );
};
