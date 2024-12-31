/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      maxWidth: {
        'custom': '1440px', 
      },
      screens: {
        'md-custom': '768px', 
      },

    },
  },
  plugins: [],
}

