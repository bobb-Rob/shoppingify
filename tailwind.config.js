/** @type {import('tailwindcss').Config} */
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
    },
    extend: {
      gridTemplateColumns: {
        desktop: '61.58px 1fr 20.3rem',
        mobile: '60px 1fr',
        itemsContainer: 'repeat(auto-fill, minmax(10rem, 1fr))',
        routes: '1fr 24.3rem',
      },
    },
  },
  plugins: [],
};
