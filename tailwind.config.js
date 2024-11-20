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
        switzer: ['Switzer', 'sans-serif'],
      },
      
      colors: {
        light: '#DBCCC4',
        accent: '#315474',
        dark: '#462611',
        darkaccent: '#A6B2DE',

      },
      aspectRatio: {
        "9/6" : '9 / 6',

      },
     
    },
  },
  plugins: [],
}

