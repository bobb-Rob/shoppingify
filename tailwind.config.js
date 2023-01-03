/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '380px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
    },
    colors: {
      orange: '#f9a109',
      peach: '#FFF0DE',
      darkgrey: '#34333A',
      grey: '#454545',
      white: '#fff',
      black: '#000000',
      blue: '#56CCF2',
    },
    extend: {
      gridTemplateColumns: {
        desktop: '61.58px 1fr 22.3rem',
        mobile: '60px 1fr',
        itemsContainer: 'repeat(auto-fill, minmax(10rem, 1fr))',
        routes: '1fr 24.3rem',
      },
      colors: {
        amber: colors.amber,
        emerald: colors.emerald,
        gray: colors.gray,
        sky: colors.sky,
      }
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.5rem',
          backgroundColor: '#f9a109',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
        },
        '.btn-red': {
          backgroundColor: '#e63946',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#e63946',
          },
        },
      });
    }),
  ],
};
