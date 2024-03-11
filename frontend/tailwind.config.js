import daisyui from "daisyui";
export default {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#110053',
        purple: '#CCC5FF',
        green: '#dffff6',
        lightGreen:"#64FFD9",
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
      backgrondPosition: {
        'top-left': 'top left',
        'top-right': 'top right',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: "light",
  },
}

