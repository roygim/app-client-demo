/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#c1deff',
          secondary: '#84afff',
        },
        info: {
          success: '#16a34a',
          error: '#b91c1c',
        }
      }
    },
  },
  plugins: [],
}