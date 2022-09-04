const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// https://access.mymind.com/colors/eyJ0IjoiUGFyYWRpc28iLCJjIjpbIiNGMkYyRjIiLCIjMDAwMDAwIiwiIzBCNjRGRSJdfQ
const palette = {
  'kashmir-blue': {
    DEFAULT: '#5166A0',
    50: '#C6CEE2',
    100: '#B9C2DB',
    200: '#9EAACE',
    300: '#8393C0',
    400: '#677BB2',
    500: '#5166A0',
    600: '#3E4E7B',
    700: '#2B3756',
    800: '#181F30',
    900: '#06070B',
  },
  primary: '#5166a0',
  secondary: colors.black,
  background: colors.white,
}

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./{components,pages}/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-links': palette.primary,
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: palette.primary,
          'primary-content': colors.white,
          secondary: palette.secondary,
          'secondary-content': colors.white,
          accent: palette.primary,
          'accent-content': colors.white,
          neutral: colors.gray[700],
          'neutral-content': colors.white,
          'base-100': colors.white,
          'base-200': colors.gray[100],
          'base-300': colors.gray[200],
          'base-content': colors.black,

          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'none',
          '--btn-focus-scale': '1',
          '--tab-radius': '0.25rem',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
