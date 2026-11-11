/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        soleil: "#FFC72C",
        nuit: "#1B2A6B",
        piment: "#E8432E",
        palmier: "#0E7C5A",
        hibiscus: "#F26BA8",
        coton: "#FFFBF2",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
