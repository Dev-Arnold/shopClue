/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(0deg, #ff934b 0%, #ff5e62 100%)',
      },
      colors:{
        'iconColor':'#24A3B5',
        'layoutColor':'#EFF7FA'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
