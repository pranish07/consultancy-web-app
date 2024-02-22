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
      },screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        large: "1000px",
        xl: "1440px",
        "2xl": "1536px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
}

