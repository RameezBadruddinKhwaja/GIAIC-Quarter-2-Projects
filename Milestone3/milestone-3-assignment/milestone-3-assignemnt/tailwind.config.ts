import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      textColor: {
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
