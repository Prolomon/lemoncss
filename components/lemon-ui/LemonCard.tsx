import React from "react";
import { Lemon } from "@/lib/lemon";

interface LemonCardProps {
  children: React.ReactNode;
  title?: string;
  style?: React.CSSProperties;
}

export const LemonCard: React.FC<LemonCardProps> = ({ children, title, style }) => {
  const cardStyle = {
    ...Lemon.background("#1a1a1a"),
    ...Lemon.borderRadius(16),
    ...Lemon.padding(24),
    ...Lemon.borderWidth(1),
    ...Lemon.borderColor("#333"),
    ...Lemon.boxShadow("0 4px 6px rgba(0,0,0,0.1)"),
    ...style,
  };

  const titleStyle = {
    ...Lemon.fontSize(20),
    ...Lemon.fontWeight("bold"),
    ...Lemon.marginBottom(16),
    ...Lemon.color("#fff"),
  };

  return (
    <div style={cardStyle}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      <div style={{ ...Lemon.color("#ccc") }}>{children}</div>
    </div>
  );
};
