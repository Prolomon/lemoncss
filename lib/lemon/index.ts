// Lemon/index.ts
import { config } from "./lemon.config";

type ColorKeys = keyof typeof config.colors;
type SizeKeys = keyof typeof config.sizes;

interface LemonType {
  color: { [K in ColorKeys]: { color: string } } & ((val: string) => { color: string });
  backgroundColor: { [K in ColorKeys]: { backgroundColor: string } } & ((val: string) => { backgroundColor: string });
  font: {
    size: { [K in SizeKeys]: { fontSize: number } } & ((val: number) => { fontSize: number });
  };
  width: { [K in SizeKeys]: { width: number } } & ((val: number | string) => { width: number | string });
  height: { [K in SizeKeys]: { height: number } } & ((val: number | string) => { height: number | string });
  [key: string]: any;
}

function toCamelCase(str: string) {
  return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}

// Compile function for dynamic or numeric props
function compile(path: string[], args: any[] = []): Record<string, any> {
  const style: Record<string, any> = {};
  const last = path[path.length - 1];
  const propName = toCamelCase(path.join(""));

  // Dynamic numeric/string props
  if (args.length === 1) {
    const val = args[0];
    const key = toCamelCase(last);
    style[key] = val;
    return style;
  }

  // Static styles with underscore (e.g., margin_top)
  if (last && last.includes("_")) {
    const [prop, val] = last.split("_");
    style[toCamelCase(prop)] = val;
  }

  // Flex shorthand
  if (path[0] === "flex") style.flex = 1;

  return style;
}

// Recursive Proxy with config resolution
function createProxy(path: string[] = []): any {
  return new Proxy(() => {}, {
    get(_, prop: string) {
      const fullPath = [...path, prop];

      // Config-driven color
      if (fullPath[0] === "color" && config.colors[prop as ColorKeys]) {
        return { color: config.colors[prop as ColorKeys] };
      }

      // Config-driven backgroundColor
      if (fullPath[0] === "backgroundColor" && config.colors[prop as ColorKeys]) {
        return { backgroundColor: config.colors[prop as ColorKeys] };
      }

      // Config-driven font size
      if (fullPath[0] === "font" && fullPath[1] === "size" && config.sizes[prop as SizeKeys]) {
        return { fontSize: config.sizes[prop as SizeKeys] };
      }

      // Config-driven width/height
      if (fullPath[0] === "width" && config.sizes[prop as SizeKeys]) {
        return { width: config.sizes[prop as SizeKeys] };
      }
      if (fullPath[0] === "height" && config.sizes[prop as SizeKeys]) {
        return { height: config.sizes[prop as SizeKeys] };
      }

      // Otherwise, continue recursive proxy
      return createProxy(fullPath);
    },
    apply(_, __, args: any[]) {
      return compile(path, args);
    },
  });
}

// Root export
export const Lemon: LemonType = createProxy();
