/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#004a4c',
          light: '#005d60',
          dark: '#003739',
        },
        green: {
          DEFAULT: '#349c65',
          light: '#44c17e',
          dark: '#2a7d50',
        },
        'bright-green': '#44c17e',
        'soft-blue': '#9ecde0',
        'soft-gray': {
          DEFAULT: '#f5f7fa',
          dark: '#e8ebef',
        },
      },
      fontFamily: {
        sans: ['Arial MT', 'Arial', 'sans-serif'],
        serif: ['Arial MT', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

