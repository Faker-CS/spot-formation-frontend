import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001F3F', // Navy
    },
    secondary: {
      main: '#FF4136', // Coral
    },
    error: {
      main: '#DB2828', // Red
    },
    warning: {
      main: '#FF851B', // Orange
    },
    info: {
      main: '#7FDBFF', // Cyan
    },
    success: {
      main: '#2ECC40', // Green
    },
    background: {
      default: '#FFF5E1', // Light Peach/Beige
      paper: '#F7F7F7', // Extra Light Gray
    },
    text: {
      primary: '#111111', // Black
      secondary: '#555555', // Darker Gray
    },
    // Custom colors (access via theme.palette.custom.purple)
    custom: {
      purple: '#B10DC9',
      maroon: '#85144B',
      lime: '#01FF70',
      teal: '#39CCCC',
      fuchsia: '#F012BE',
      gradient: 'linear-gradient(to right, #FFDC00, #FF4136)',
    },
  },
  typography: {
    fontFamily: ['Red Hat Display', 'Lato', 'sans-serif'].join(','),
    hh1: { // Custom variant for HH1
      fontFamily: 'Red Hat Display',
      fontWeight: 300,
      fontSize: '5rem', // 80px
    },
    h1: {
      fontFamily: 'Red Hat Display',
      fontWeight: 400,
      fontSize: '3.75rem', // 60px
    },
    h2: {
      fontFamily: 'Red Hat Display',
      fontWeight: 300,
      fontSize: '3.75rem', // 60px
    },
    h3: {
      fontFamily: 'Red Hat Display',
      fontWeight: 600,
      fontSize: '3.625rem', // 58px
    },
    h4: { // Using h4 for Titles (40px)
      fontFamily: 'Red Hat Display',
      fontWeight: 300,
      fontSize: '2.5rem', // 40px
    },
    h5: { // For smaller titles (30px)
      fontFamily: 'Red Hat Display',
      fontWeight: 300,
      fontSize: '1.875rem', // 30px
    },
    h6: { // For attitude-like (20px)
      fontFamily: 'Lato',
      fontWeight: 500,
      fontSize: '1.25rem', // 20px
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '0.9375rem', // 15px
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
    },
    subtitle1: { // For small paras
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '0.75rem', // 12px
    },
    subtitle2: { // For x-small
      fontFamily: 'Lato',
      fontWeight: 400,
      fontSize: '0.625rem', // 10px
    },
    button: {
      fontFamily: 'Lato',
      fontWeight: 600,
      fontSize: '1.125rem', // 18px
    },
    // Add custom for P Large if needed: theme.typography.customLarge
    customLarge: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '3.375rem', // 54px (if not a typo)
    },
  },
});

export default theme;