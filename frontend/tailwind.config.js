/** @type {import('tailwindcss').Config} */
export default {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#110053',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

