import type { Config } from "tailwindcss";

// Tailwind v4 uses zero-config by default, but some tooling (like shadcn/ui CLI)
// still expects a config file to exist. This minimal config enables the CLI
// and adds the animate plugin used by shadcn/ui.
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
