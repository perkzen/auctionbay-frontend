import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        '1.5xl': ['1.438rem', '1.725rem'],
        '2.5xl': ['1.625rem', '1.95rem'],
        '3.5xl': ['2rem', '2.4rem'],
        '6.5xl': ['4rem', '4.8rem'],
        '7.5xl': ['5rem', '5rem'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '6.25rem',
      },
      colors: {
        primary: {
          100: '#F4FF47',
          200: '#D0DB33',
          300: '#ACB723',
        },
        secondary: {
          100: '#272D2D',
          200: '#1C2526',
          300: '#131E20',
        },
        tertiary: {
          100: '#EDF4F2',
          200: '#DDE9E6',
          300: '#B0BFBD',
        },
        danger: '#FFAA98',
        warning: '#F9FF90',
        success: '#ADFF90',
      },
      textColor: {
        primary: '#071015',
        tertiary: '#74817F',
        accent: '#F4FF47',
      },
      backgroundColor: {
        base: '#F6F6F4',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
