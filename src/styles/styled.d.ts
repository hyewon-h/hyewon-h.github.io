import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: {
      thin: string;
      light: string;
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
      serif: string;
      orbit: string;
      gowunDodum: string;
      spaceGrotesk: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      white: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      black: string;
      success: string;
      warning: string;
      error: string;
      info: string;
      background: string;
      surface: string;
    };
    media: {
      smMax: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      mo: string;
      pc: string;
      xl: string;
      x2l: string;
      x3l: string;
      x4l: string;
      x5l: string;
    };
  }
}
