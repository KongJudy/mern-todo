/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#1ACA9E',
        yellow: '#f0f0b2',
        'dark-blue': '#06002c'
      },
      dropShadow: {
        md: '0 3px 3px rgba(0, 0, 0, 0.651)',
        lg: '0 6px 6px rgba(0, 0, 0, 0.651)'
      }
    }
  },
  plugins: []
};
