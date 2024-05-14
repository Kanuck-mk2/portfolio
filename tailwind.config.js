/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla, san serif'],
        nunito: ['Nunito, sans serif'],
        kanit: ['Kanit, sans serif'],
      },
    },
  },
  plugins: [],
};
