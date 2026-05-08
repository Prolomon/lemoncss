import React from "react";
import { Lemon } from "@/lib/lemon";

interface LemonContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const LemonContainer: React.FC<LemonContainerProps> = ({ children, style }) => {
  const containerStyle = {
    ...Lemon.maxWidth(1200),
    ...Lemon.marginLeft("auto"),
    ...Lemon.marginRight("auto"),
    ...Lemon.paddingLeft(20),
    ...Lemon.paddingRight(20),
    ...style,
  };

  return <div style={containerStyle}>{children}</div>;
};
