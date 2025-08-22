import type { Config } from "tailwindcss";

// Tailwind v4 is CSS-first. Tokens are defined in styles/globals.css via @theme.
// This config declares content paths and plugins only.
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
};

export default config;
