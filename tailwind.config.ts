import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      coral: "#FF6F61", //Buttons, Headers, Highlights
      yellow: "#FFD54F", //Accents, Secondary Buttons
      green: "#81C784", //Links, Progress Bars
      beige: "#FFE0B2", //Cards, Containers
      softWhite: "#F9F9F9", //Background
      gray: "#424242", //Text
      transparent: "transparent",
    },
    extend: {
      fontSize: {
        vsm: "10px",
      },
      fontFamily: {
        poorStory: ['"Comic Sans MS"', "cursive", "sans-serif"], // Add poor story font here
      },
      screens: {
        xs: "440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
