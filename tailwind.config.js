/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      animation: {
        slideIn: "slideIn 1s ease-in-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      
      fontFamily: {
        synonym: ['Synonym', 'sans-serif'],
        amulya: ['Amulya', 'sans-serif'],
        Shrikhand: ['Shrikhland', 'serif'],
      },
      
      colors: {
        light: '#ECE3DE',
        accent: '#1A548A',
        dark: '#2F2C2C',
      },
      aspectRatio: {
        "9/6" : '9 / 6',

      },
     
    },
  },
  plugins: [],
}

