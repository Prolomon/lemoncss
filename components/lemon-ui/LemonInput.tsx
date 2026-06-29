import { Lemon } from "@/lib/lemon";

export const LemonInput = ({
  label,
  placeholder,
  value,
  onChange,
  style = {}
}: {
  label?: string,
  placeholder?: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  style?: React.CSSProperties
}) => {
  return (
    <div style={{ ...Lemon.display("flex"), ...Lemon.flexDirection("column"), ...Lemon.gap(8), ...style }}>
      {label && <label style={{ ...Lemon.color("#999"), ...Lemon.fontSize(14), ...Lemon.fontWeight("600") }}>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          ...Lemon.backgroundColor("#050505"),
          ...Lemon.border("1px solid #333"),
          ...Lemon.borderRadius(8),
          ...Lemon.padding("12px 16px"),
          ...Lemon.color("#fff"),
          ...Lemon.fontSize(16),
          ...Lemon.outline("none"),
          ...Lemon.transition("border-color 0.2s"),
        }}
        onFocus={(e) => e.currentTarget.style.borderColor = "#facc15"}
        onBlur={(e) => e.currentTarget.style.borderColor = "#333"}
      />
    </div>
  );
};
