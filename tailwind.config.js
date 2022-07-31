/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '380px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      orange: '#f9a109',
      grey: '#454545',
      white: '#fff',      
    }, 
    extend: {
      gridTemplateColumns: {
        desktop: '61.58px 1fr 24.3rem',
      },
    },
  },
  plugins: [],
}
