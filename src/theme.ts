import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#701a2c', // Rich Maroon
      light: '#a0354e', // Soft Maroon
      dark: '#4a0a17', // Deep Maroon
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b27f66', // Elegant Warm Nude
      light: '#d8b29c', // Soft Nude/Beige
      dark: '#885740', // Deep Nude/Tan
      contrastText: '#ffffff',
    },
    background: {
      default: '#faf6f3', // Cream / Light Nude Background
      paper: '#ffffff',
    },
    text: {
      primary: '#2e1c18', // Very dark warm brown/black for better harmony
      secondary: '#6b5752', // Soft warm grey-brown
    },
  },
  typography: {
    fontFamily: [
      'Outfit',
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(6, 78, 59, 0.15)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #701a2c 0%, #a0354e 100%)',
            border: 0,
            color: '#ffffff',
            '&:hover': {
              background: 'linear-gradient(135deg, #4a0a17 0%, #701a2c 100%)',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            background: 'linear-gradient(135deg, #b27f66 0%, #d8b29c 100%)',
            border: 0,
            color: '#ffffff',
            '&:hover': {
              background: 'linear-gradient(135deg, #885740 0%, #b27f66 100%)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;
