import { Lemon } from "@/lib/lemon";

export const LemonSwitch = ({
  label,
  checked,
  onChange
}: {
  label?: string,
  checked?: boolean,
  onChange?: (checked: boolean) => void
}) => {
  return (
    <div style={{ ...Lemon.display("flex"), ...Lemon.alignItems("center"), ...Lemon.gap(12) }}>
      <div
        onClick={() => onChange?.(!checked)}
        style={{
          ...Lemon.width(44),
          ...Lemon.height(24),
          ...Lemon.borderRadius(12),
          ...Lemon.backgroundColor(checked ? "#facc15" : "#333"),
          ...Lemon.position("relative"),
          ...Lemon.cursor("pointer"),
          ...Lemon.transition("background-color 0.2s")
        }}
      >
        <div style={{
          ...Lemon.width(18),
          ...Lemon.height(18),
          ...Lemon.borderRadius(9),
          ...Lemon.backgroundColor(checked ? "#000" : "#fff"),
          ...Lemon.position("absolute"),
          ...Lemon.top(3),
          ...Lemon.left(checked ? 23 : 3),
          ...Lemon.transition("left 0.2s, background-color 0.2s")
        }} />
      </div>
      {label && <span style={{ ...Lemon.color("#fff"), ...Lemon.fontSize(16) }}>{label}</span>}
    </div>
  );
};
