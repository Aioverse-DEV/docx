// AIOVERSE Theme - Material-UI (MUI) Configuration
// Official brand theme for Material-UI/React projects
// Version 1.0 - March 2026

import { createTheme } from '@mui/material/styles';

export const aioverseMuiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#73effb', // Electric Aqua
      light: '#a2edf9',
      dark: '#44d8ea',
      contrastText: '#002428',
    },
    secondary: {
      main: '#002428', // Midnight Teal
      light: '#004a51',
      dark: '#000000',
      contrastText: '#fafafa',
    },
    background: {
      default: '#002428', // Midnight Teal
      paper: '#003136',
    },
    text: {
      primary: '#fafafa', // Soft White
      secondary: '#e6e6e6',
    },
    error: {
      main: '#ff6b6b',
    },
    success: {
      main: '#73effb',
    },
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'NEBULA 2, sans-serif',
      fontSize: '4.5rem',
      fontWeight: 800,
      color: '#73effb',
    },
    h2: {
      fontFamily: 'NEBULA 2, sans-serif',
      fontSize: '3rem',
      fontWeight: 700,
      color: '#fafafa',
    },
    h3: {
      fontFamily: 'Nohemi, sans-serif',
      fontSize: '2rem',
      fontWeight: 600,
      color: '#73effb',
    },
    h4: {
      fontFamily: 'Nohemi, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#fafafa',
    },
    body1: {
      fontFamily: 'Helvetica Neue, Arial, sans-serif',
      fontSize: '1rem',
      color: '#fafafa',
    },
    code: {
      fontFamily: 'Tokyo Trail Mono, monospace',
      fontSize: '0.875rem',
      color: '#73effb',
      backgroundColor: '#002428',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#73effb',
          color: '#002428',
          '&:hover': {
            backgroundColor: '#44d8ea',
          },
        },
        outlined: {
          borderColor: '#73effb',
          color: '#73effb',
          '&:hover': {
            borderColor: '#44d8ea',
            backgroundColor: 'rgba(115, 239, 251, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#003136',
          borderRadius: 8,
          border: '1px solid rgba(115, 239, 251, 0.2)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(115, 239, 251, 0.2)',
          color: '#73effb',
        },
        filled: {
          backgroundColor: '#73effb',
          color: '#002428',
        },
      },
    },
  },
});

export default aioverseMuiTheme;
