const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    "./app/**/*.ts",
    "./app/**/*.tsx",
    "./app/**/*.mdx",
    "./app/**/*.md",
    "./remix.config.js",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    colors: {
        ...colors,
        transparent: 'transparent',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};