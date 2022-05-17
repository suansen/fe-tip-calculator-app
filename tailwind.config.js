module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        "neutral-dark-cyan": "hsl(183, 100%, 15%)",
        "neutral-dark-gray-cyan": "hsl(186, 14%, 43%)",
        "neutral-gray-cyan": "hsl(184, 14%, 56%)",
        "neutral-light-gray-cyan": "hsl(185, 41%, 84%)",
        "neutral-very-light-gray-cyan": "hsl(189, 41%, 97%)",
        "neutral-white": "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        "primary-font": ["Space Mono", "serif"]
      }
    }
  },
  plugins: []
};
