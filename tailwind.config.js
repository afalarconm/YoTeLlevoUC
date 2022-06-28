module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url('./assets/img/bg_image.jpg')"
    },
    extend: {
      colors: {
        'navbar': '#1F2937',
      },
    }
  },
  plugins: [require('tailwindcss-gradients'),],
}