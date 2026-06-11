import { DefaultTheme } from "styled-components";

const deviceSizes = {
  smMax: "374px",
  xs: "320px",
  sm: "375px",
  md: "601px",
  lg: "1080px",
  mo: "(hover: none) and (pointer: coarse)",
  // [변경] PC 판별을 hover/pointer 기반에서 너비 기준으로 변경.
  //   기존: (hover: hover) and (pointer: fine) and (min-width: 500px)
  //   - 마우스 환경(hover/pointer)으로 PC를 판별했으나, DevTools 모바일 모드에서
  //     엘리먼트 피커(⌘/Ctrl+Shift+C)를 켜면 포인터가 잠깐 fine/hover로 바뀌어
  //     ≥500px 뷰포트가 PC UI로 전환되는 현상이 있었음(개발 중 아티팩트, 실기기엔 무해).
  //   - pc 사용처가 전부 레이아웃 분기라 hover/pointer 감지가 불필요해 너비 기준으로 단순화.
  //   - 분기점: 데스크톱(아이패드 가로/소형 노트북) 기준으로 1080px 적용.
  //     더 이르게 전환하려면 768px(태블릿 세로), 토큰 일관성을 원하면 lg(1080px)로 조정 가능.
  // pc: "(hover: hover) and (pointer: fine) and (min-width: 500px)",
  pc: "(min-width: 1080px)",
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
  primary: "#b32576",
  primaryLight: "#ae648e",
  primaryDark: "#8a1c5a",

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
