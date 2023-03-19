module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Your custom configuration goes here
      backgroundColor: {
        primary: "#4caf50",
        secondary: "#f1f1f1",
      },
      textColor: {
        primary: "#4caf50",
        secondary: "#f1f1f1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
