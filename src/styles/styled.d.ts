import 'styled-components';

declare module 'styled-components' {
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
