/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        ice: '#ECF6FF',
        'ice-hover': '#78828B',
        tertiary: "#353940",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    prefix: 'ds',
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        mytheme: {
          primary: "#131619",
          secondary: "#1a2127",          
          accent: "#a3e635",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#7289da",
          success: "#22ee22",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
