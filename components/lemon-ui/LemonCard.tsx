import { Lemon } from "@/lib/lemon";

export const LemonCard = ({
  title,
  children,
  style = {}
}: {
  title?: string,
  children: React.ReactNode,
  style?: React.CSSProperties
}) => {
  return (
    <div style={{
      ...Lemon.background("#111"),
      ...Lemon.borderRadius(16),
      ...Lemon.padding(24),
      ...Lemon.border("1px solid #222"),
      ...Lemon.boxShadow("0 4px 6px rgba(0,0,0,0.1)"),
      ...style
    }}>
      {title && (
        <h3 style={{
          ...Lemon.fontSize(20),
          ...Lemon.fontWeight("bold"),
          ...Lemon.marginBottom(16),
          ...Lemon.color("#fff")
        }}>
          {title}
        </h3>
      )}
      <div style={{ ...Lemon.color("#ccc") }}>
        {children}
      </div>
    </div>
  );
};
