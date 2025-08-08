import { DefaultTheme } from 'styled-components';

const deviceSizes = {
  smMax: '374px',
  xs: '320px',
  sm: '375px',
  md: '601px',
  lg: '1080px',
  mo: '(hover: none) and (pointer: coarse)',
  pc: '(hover: hover) and (pointer: fine) and (min-width: 500px)',
  xl: '1201px',
  x2l: '1366px',
  x3l: '1440px',
  x4l: '1536px',
  x5l: '1920px',
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

const fontFamily = {
  thin: `"ProximaNova-Thin", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  light: `"ProximaNova-Light", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  regular: `"ProximaNova-Regular", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  medium: `"ProximaNova-Medium", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  semibold: `"ProximaNova-Semibold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  bold: `"ProximaNova-bold", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  serif: `"Castoro", "NotoSerifKR-Semibold", serif;`,
  orbit: `"Orbit", sans-serif;`,
  gowunDodum: `"GowunDodum", sans-serif;`,
  spaceGrotesk: `"SpaceGrotesk", "Pretendard Variable", Pretendard, sans-serif;`,
};

const fontFamilyDesktop = {
  thin: `"ProximaNova-Thin", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  light: `"ProximaNova-Light", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  regular: `"ProximaNova-Regular", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  medium: `"ProximaNova-Medium", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  semibold: `"ProximaNova-Semibold", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  bold: `"ProximaNova-bold", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif;`,
  serif: `"Castoro", "NotoSerifKR-Semibold", serif;`,
  orbit: `"Orbit", sans-serif;`,
  gowunDodum: `"GowunDodum", sans-serif;`,
  spaceGrotesk: `"SpaceGrotesk", "Pretendard Variable", Pretendard, sans-serif;`,
};

const theme: DefaultTheme = {
  fontFamily: {
    thin: `${fontFamily.thin}`,
    light: `${fontFamily.light}`,
    regular: `${fontFamily.regular}`,
    medium: `${fontFamily.medium}`,
    semibold: `${fontFamily.semibold}`,
    bold: `${fontFamily.bold}`,
    serif: `${fontFamily.serif}`,
    orbit: `${fontFamily.orbit}`,
    gowunDodum: `${fontFamily.gowunDodum}`,
    spaceGrotesk: `${fontFamily.spaceGrotesk}`,
  },
  media,
};

const themeDesktop: DefaultTheme = {
  fontFamily: {
    thin: `${fontFamilyDesktop.thin}`,
    light: `${fontFamilyDesktop.light}`,
    regular: `${fontFamilyDesktop.regular}`,
    medium: `${fontFamilyDesktop.medium}`,
    semibold: `${fontFamilyDesktop.semibold}`,
    bold: `${fontFamilyDesktop.bold}`,
    serif: `${fontFamilyDesktop.serif}`,
    orbit: `${fontFamilyDesktop.orbit}`,
    gowunDodum: `${fontFamilyDesktop.gowunDodum}`,
    spaceGrotesk: `${fontFamilyDesktop.spaceGrotesk}`,
  },
  media,
};

export { theme, themeDesktop };
