/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["kalame", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#4a6dff", 
        secondary: "#3f4264",
        mainBlack: "#212121",
        mainGray: "#9e9e9e",
      },
    },
  },
  plugins: [],
};
