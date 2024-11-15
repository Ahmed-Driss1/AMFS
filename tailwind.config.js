/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      screens: {
        sm: '640px',  // Applies for screens >= 640px
        md: '768px',  // Applies for screens >= 768px
        lg: '1024px', // Applies for screens >= 1024px
        xl: '1280px', // Applies for screens >= 1280px
      },
    },
  },
  plugins: [],
}

