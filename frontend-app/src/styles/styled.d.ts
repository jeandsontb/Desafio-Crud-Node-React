import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        background: string;
        background2: string;
        red: string;
        green: string;
    },
    fonts: {
      poppins: string;
      abrilFatface: string;
    };
  }
}