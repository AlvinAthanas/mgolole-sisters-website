import type { TypographyVariantsOptions } from '@mui/material/styles';

export const responsiveTypography: TypographyVariantsOptions = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  
  // Base font size for html element (used for rem calculations)
  htmlFontSize: 16,
  
  // Responsive font sizes
  h1: {
    fontSize: '2.5rem', // 40px
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    '@media (min-width:600px)': {
      fontSize: '3rem', // 48px
    },
    '@media (min-width:900px)': {
      fontSize: '3.5rem', // 56px
    },
    '@media (min-width:1200px)': {
      fontSize: '4rem', // 64px
    },
  },
  
  h2: {
    fontSize: '2rem', // 32px
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    '@media (min-width:600px)': {
      fontSize: '2.25rem', // 36px
    },
    '@media (min-width:900px)': {
      fontSize: '2.5rem', // 40px
    },
    '@media (min-width:1200px)': {
      fontSize: '3rem', // 48px
    },
  },
  
  h3: {
    fontSize: '1.75rem', // 28px
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (min-width:600px)': {
      fontSize: '1.875rem', // 30px
    },
    '@media (min-width:900px)': {
      fontSize: '2rem', // 32px
    },
    '@media (min-width:1200px)': {
      fontSize: '2.25rem', // 36px
    },
  },
  
  h4: {
    fontSize: '1.5rem', // 24px
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (min-width:600px)': {
      fontSize: '1.625rem', // 26px
    },
    '@media (min-width:1200px)': {
      fontSize: '1.75rem', // 28px
    },
  },
  
  h5: {
    fontSize: '1.25rem', // 20px
    fontWeight: 600,
    lineHeight: 1.5,
    '@media (min-width:600px)': {
      fontSize: '1.375rem', // 22px
    },
    '@media (min-width:1200px)': {
      fontSize: '1.5rem', // 24px
    },
  },
  
  h6: {
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.5,
    '@media (min-width:600px)': {
      fontSize: '1.25rem', // 20px
    },
  },
  
  subtitle1: {
    fontSize: '1rem', // 16px
    fontWeight: 500,
    lineHeight: 1.6,
    '@media (min-width:600px)': {
      fontSize: '1.0625rem', // 17px
    },
  },
  
  subtitle2: {
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.6,
    '@media (min-width:600px)': {
      fontSize: '0.9375rem', // 15px
    },
  },
  
  body1: {
    fontSize: '1rem', // 16px
    lineHeight: 1.6,
    '@media (min-width:600px)': {
      fontSize: '1.0625rem', // 17px
      lineHeight: 1.7,
    },
  },
  
  body2: {
    fontSize: '0.875rem', // 14px
    lineHeight: 1.6,
    '@media (min-width:600px)': {
      fontSize: '0.9375rem', // 15px
      lineHeight: 1.7,
    },
  },
  
  button: {
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    textTransform: 'none', // Disables uppercase transformation
    letterSpacing: '0.025em',
    '@media (min-width:600px)': {
      fontSize: '0.9375rem', // 15px
    },
  },
  
  caption: {
    fontSize: '0.75rem', // 12px
    lineHeight: 1.5,
    '@media (min-width:600px)': {
      fontSize: '0.8125rem', // 13px
    },
  },
  
  overline: {
    fontSize: '0.75rem', // 12px
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    '@media (min-width:600px)': {
      fontSize: '0.8125rem', // 13px
    },
  },
};

// Alternative: More compact typography for admin/dashboard
export const compactTypography: TypographyVariantsOptions = {
  ...responsiveTypography,
  h1: {
    ...responsiveTypography.h1,
    fontSize: '2rem', // Smaller base for admin
    '@media (min-width:600px)': {
      fontSize: '2.25rem',
    },
    '@media (min-width:900px)': {
      fontSize: '2.5rem',
    },
  },
  h2: {
    ...responsiveTypography.h2,
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.75rem',
    },
    '@media (min-width:900px)': {
      fontSize: '2rem',
    },
  },
  body1: {
    fontSize: '0.9375rem', // Slightly smaller for dense interfaces
    lineHeight: 1.5,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },
};