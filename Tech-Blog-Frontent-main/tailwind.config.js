/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        colors: {
          primary: {
            DEFAULT: "#146C94",
            lighter: "#3498DB",
            darker: "#1B759E",
          },
          secondary: {
            DEFAULT: "#0B2447",
            
          },
          accent: {
            DEFAULT: "#F39C12",
            lighter: "#E74C3C",
            darker: "#6AB04C",
          },
          background: "#F8F8F8",
          textColor: "#333333",
        },
      },
    },
  },
  plugins: [],
};
