import React from "react";
import { Lemon } from "@/lib/lemon";

interface LemonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export const LemonButton: React.FC<LemonButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  style,
  ...props
}) => {
  const baseStyle = {
    ...Lemon.display("inline-flex"),
    ...Lemon.alignItems("center"),
    ...Lemon.justifyContent("center"),
    ...Lemon.borderRadius(8),
    ...Lemon.fontWeight("600"),
    ...Lemon.cursor("pointer"),
    ...Lemon.borderWidth(0),
    ...Lemon.transition("all 0.2s"),
    padding: size === "sm" ? "4px 8px" : size === "lg" ? "12px 24px" : "8px 16px",
    fontSize: size === "sm" ? 12 : size === "lg" ? 18 : 14,
  };

  const variantStyle = {
    backgroundColor: variant === "primary" ? "#0070f3" : variant === "danger" ? "#ff0000" : "#666",
    color: "#fff",
  };

  return (
    <button
      style={{ ...baseStyle, ...variantStyle, ...style }}
      {...props}
    >
      {children}
    </button>
  );
};
