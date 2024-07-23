/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-gray': '#1E3A8A',
        'light-blue': '#BFDBFE',
        'soft-pink': '#FDE2E4',
        'purple': '#C4B5FD',
      },
    },
  },
  plugins: [],
}