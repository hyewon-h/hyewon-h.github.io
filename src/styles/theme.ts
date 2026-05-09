import { DefaultTheme } from "styled-components";

const deviceSizes = {
  smMax: "374px",
  xs: "320px",
  sm: "375px",
  md: "601px",
  lg: "1080px",
  mo: "(hover: none) and (pointer: coarse)",
  pc: "(hover: hover) and (pointer: fine) and (min-width: 500px)",
  xl: "1201px",
  x2l: "1366px",
  x3l: "1440px",
  x4l: "1536px",
  x5l: "1920px",
};

const media = {
  smMax: `(max-width: ${deviceSizes.smMax})`,
  xs: `(min-width: ${deviceSizes.xs})`,
  sm: `(min-width: ${deviceSizes.sm})`,
  md: `(min-width: ${deviceSizes.md})`,
  lg: `(min-width: ${deviceSizes.lg})`,
  mo: `${deviceSizes.mo}`,
  pc: `${deviceSizes.pc}`,
  xl: `(min-width: ${deviceSizes.xl})`,
  x2l: `(min-width: ${deviceSizes.x2l})`,
  x3l: `(min-width: ${deviceSizes.x3l})`,
  x4l: `(min-width: ${deviceSizes.x4l})`,
  x5l: `(min-width: ${deviceSizes.x5l})`,
};

const pretendard = `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;

const fontFamily = {
  default: `${pretendard};`,
  serif: `"Castoro", "NotoSerifKR-Semibold", serif;`,
  orbit: `"Orbit", sans-serif;`,
  gowunDodum: `"GowunDodum", sans-serif;`,
  spaceGrotesk: `"SpaceGrotesk", ${pretendard};`,
};

const colors = {
  // Primary
  primary: "#3b82f6",
  primaryLight: "#60a5fa",
  primaryDark: "#2563eb",

  // Gray scale
  white: "#ffffff",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  black: "#000000",

  // Status
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#06b6d4",

  // Background
  background: "#ffffff",
  surface: "#f8fafc",
};

const theme: DefaultTheme = {
  fontFamily: {
    default: `${fontFamily.default}`,
    serif: `${fontFamily.serif}`,
    orbit: `${fontFamily.orbit}`,
    gowunDodum: `${fontFamily.gowunDodum}`,
    spaceGrotesk: `${fontFamily.spaceGrotesk}`,
  },
  colors,
  media,
};

const themeDesktop: DefaultTheme = {
  fontFamily: {
    default: `${fontFamily.default}`,
    serif: `${fontFamily.serif}`,
    orbit: `${fontFamily.orbit}`,
    gowunDodum: `${fontFamily.gowunDodum}`,
    spaceGrotesk: `${fontFamily.spaceGrotesk}`,
  },
  colors,
  media,
};

export { theme, themeDesktop };
