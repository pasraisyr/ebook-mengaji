import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#073835', // Dark Green
      light: '#66D47E', // Medium Green
      dark: '#04201e', // Deeper Green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#C6E772', // Light Green
      light: '#FAFFA3', // Light Yellow/Green
      dark: '#66D47E', // Medium Green
      contrastText: '#073835', // Dark green text for contrast
    },
    background: {
      default: '#f4fcd2', // Softer Light Yellow/Green background
      paper: '#ffffff',
    },
    text: {
      primary: '#073835', // Dark green for primary text
      secondary: '#4b635f', // Muted green for secondary text
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
            boxShadow: '0 4px 12px rgba(7, 56, 53, 0.15)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #073835 0%, #66D47E 100%)',
            border: 0,
            color: '#ffffff',
            '&:hover': {
              background: 'linear-gradient(135deg, #04201e 0%, #073835 100%)',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            background: 'linear-gradient(135deg, #66D47E 0%, #C6E772 100%)',
            border: 0,
            color: '#073835',
            '&:hover': {
              background: 'linear-gradient(135deg, #4aa05d 0%, #66D47E 100%)',
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
