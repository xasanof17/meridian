/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        hk: "var(--font-h)",
        outfit: "var(--font-o)",
      },
      fontSize: {
        sm: ["16px", "20px"],
        base: ["20px", "33px"],
        lg: ["25px", "32px"],
        xl: ["55px", "56px"],
        xxl: ["75px", "94px"],
      },
      fontWeight: {
        light: "var(--font-light)",
        regular: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
        extrabold: "var(--font-extrabold)",
      },
      colors: {
        white: "var(--white)",
        lightWhite: "var(--lightWhite)",
        darkGreen: "var(--darkGreen)",
        brown: "var(--brown)",
        blue: "var(--blue)",
        lightGray: "var(--lightGray)",
        gray: "var(--gray)",
        black: "var(--black)",
        black2: "var(--black2)",
        dark: "var(--dark)",
        lightBlack: "var(--lightBlack)",
      },
    },
  },
  plugins: [],
};
