/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'login-image': "url('/public/images/fondo-login.jpg')",
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};