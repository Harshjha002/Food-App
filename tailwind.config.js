/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F4A261',
        'secondary-color': '#2A9D8F',
        'accent-color': '#E76F51',
        'background-color': '#F9F9F9',
        'text-color-light': '#FFFFFF',
        'text-color-dark': '#333333',
        'border-color': '#E0E0E0',
        'shadow-color': 'rgba(0, 0, 0, 0.2)',
        'hover-shadow-color': 'rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
    },
  },
  },
  plugins: [],
}

