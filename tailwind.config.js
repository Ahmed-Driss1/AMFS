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
      },
      colors: {
        light: '#ECE3DE',
        accent: '#1A548A',
        dark: '#2F2C2C',
      },
    },
  },
  plugins: [],
}

