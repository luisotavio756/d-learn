export const theme = {
  colors: {
    cyan: {
      900: '#065666',
      800: '#086F83',
      700: '#0987A0',
      600: '#00A3C4',
      500: '#00B5D8',
      400: '#0BC5EA',
      300: '#76E4F7',
      200: '#9DECF9',
      100: '#C4F1F9',
      50: '#EDFDFD',
    },
    gray: {
      900: '#171923',
      800: '#1A202C',
      700: '#2D3748',
      600: '#4A5568',
      500: '#718096',
      400: '#A0AEC0',
      300: '#CBD5E0',
      200: '#E2E8F0',
      100: '#EDF2F7',
    },
    green: {
      900: '#1C4532',
      800: '#22543D',
      700: '#276749',
      600: '#2F855A',
      500: '#38A169',
      400: '#48BB78',
      300: '#68D391',
      200: '#9AE6B4',
      50: '#F0FFF4',
    },
    red: {
      actual: '#E64E3A',
      600: '#C53030',
      700: '#9B2C2C',
      800: '#822727',
      900: '#63171B',
      500: '#E53E3E',
      400: '#F56565',
      300: '#FC8181',
      50: '#FFF5F5',
    },
    blue: {
      actual: '#0D63F6',
      900: '#1A365D',
      800: '#2A4365',
      700: '#2C5282',
      600: '#2B6CB0',
      500: '#3182CE',
      400: '#4299E1',
      300: '#63B3ED',
      200: '#90CDF4',
      100: '#BEE3F8',
      50: '#EBF8FF',
    },
    ice: {
      500: '#E7FAEB',
      700: 'c4f3ce',
    },
    yellow: {
      actual: '#F4B40A',
      50: '#FFFFF0',
      400: '#ECC94B',
      500: '#D69E2E',
      600: '#B7791F',
    },
    black: '#1A1A1A',
    white: '#fff',
    background: '#FAFAFA',
  },
  fontFamily: {
    sans: '"Fredoka", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontWeight: {
    regular: 400,
    medium: 600,
    heavy: 700,
  },
  fontSize: {
    xxs: '0.625rem', // 10px
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '2.25rem', // 36px
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.4,
    normal: 1.5,
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
} as const;

export type ThemeType = typeof theme;
