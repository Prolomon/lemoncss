import { Lemon } from "@/lib/lemon";

export const LemonText = ({
  children,
  size = "md",
  weight = "normal",
  color = "#ccc",
  style = {}
}: {
  children: React.ReactNode,
  size?: "sm" | "md" | "lg" | "xl",
  weight?: "normal" | "bold" | "black",
  color?: string,
  style?: React.CSSProperties
}) => {
  const sizes = {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 32
  };

  const weights = {
    normal: 400,
    bold: 700,
    black: 900
  };

  return (
    <p style={{
      ...Lemon.fontSize(sizes[size]),
      ...Lemon.fontWeight(weights[weight]),
      ...Lemon.color(color),
      ...Lemon.lineHeight(1.6),
      ...style
    }}>
      {children}
    </p>
  );
};
