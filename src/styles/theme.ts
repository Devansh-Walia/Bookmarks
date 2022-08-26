import { createTheme, PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string;
        dark: string;
        light: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5352ED',
      dark: '#6C6BF9',
      light: '#E4E3FF'
    }
  }
});
