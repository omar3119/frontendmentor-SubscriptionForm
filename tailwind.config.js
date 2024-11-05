/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // Primary
        tomato: "hsl(4, 100%, 67%)",
        tomatoligth: "hsla(4, 100%, 67%, 0.500)",

        // Neutral
        "Dark-Slate-Grey": "hsl(234, 29%, 20%)",
        "Charcoal-Grey": "hsl(235, 18%, 26%)",
        Grey: "hsl(231, 7%, 60%)",
        White: "hsl(0, 0%, 100%)",
      },
      listStyleImage: {
        checkmark: 'url("./assets/images/icon-list.svg")',
      },
    },
    screens: {

      'tablet': '770px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  // ...
};
