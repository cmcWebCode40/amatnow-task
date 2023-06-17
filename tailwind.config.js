/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigations/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#F12B01',
      white: '#fff',
      black: '#000',
      gray: '#EEEEEE',
      'gray-light': '#9D9D9D',
    },
    extend: {
      colors: {
        // black: '#000',
      },
    },
  },
  plugins: [],
};
