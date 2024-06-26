import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "25p": "25%"
      },
      colors: {
        "bg-theme": "#141414"
      },
      fontFamily : {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
      ],
      },
      fontSize : {
        "main-name": "50pt"
      },
    },
  },
  plugins: [],
};
export default config;
