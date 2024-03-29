/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "blog-grid": "repeat(auto-fill, minmax(270px, 1fr))",
      },
      colors: {
        backgroundColor: "#0e0c23",
        textColor: "#ffffff",
        btn: "#3673fd",
        bgSoft: "#2d2b42",
        textSoft: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
