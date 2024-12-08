import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",    // Custom background color
        foreground: "var(--foreground)",    // Custom foreground color
        border: "var(--border)",            // Custom border color
      },
    },
  },
  plugins: [],
} satisfies Config;
