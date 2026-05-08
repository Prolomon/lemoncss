import { Lemon } from "@/lib/lemon";

export const LemonButton = ({
  children,
  variant = "primary",
  onClick,
  style = {}
}: {
  children: React.ReactNode,
  variant?: "primary" | "secondary" | "danger",
  onClick?: () => void,
  style?: React.CSSProperties
}) => {
  const baseStyle = {
    ...Lemon.padding("12px 24px"),
    ...Lemon.borderRadius(8),
    ...Lemon.fontWeight("bold"),
    ...Lemon.cursor("pointer"),
    ...Lemon.border("none"),
    ...Lemon.transition("all 0.2s"),
    ...Lemon.display("inline-flex"),
    ...Lemon.alignItems("center"),
    ...Lemon.justifyContent("center"),
    ...Lemon.fontSize(16),
  };

  const variantStyles = {
    primary: {
      ...Lemon.backgroundColor("#facc15"),
      ...Lemon.color("#000"),
    },
    secondary: {
      ...Lemon.backgroundColor("#333"),
      ...Lemon.color("#fff"),
    },
    danger: {
      ...Lemon.backgroundColor("#ef4444"),
      ...Lemon.color("#fff"),
    }
  };

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, ...variantStyles[variant], ...style }}
    >
      {children}
    </button>
  );
};
