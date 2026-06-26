import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2D52",
          50: "#e8eef6",
          100: "#c5d4e9",
          200: "#9eb8d9",
          300: "#769cc9",
          400: "#5787be",
          500: "#3872b3",
          600: "#2a5fa0",
          700: "#1d4d8d",
          800: "#154D8C",
          900: "#0F2D52",
          950: "#081726",
        },
        secondary: "#154D8C",
        accent: {
          DEFAULT: "#D6A64F",
          light: "#e8c47e",
          dark: "#b8892f",
        },
        background: "#F8FAFC",
        dark: "#081726",
        muted: "#64748B",
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.12), 0 8px 40px rgba(0,0,0,0.1)",
        "glow-accent": "0 0 24px rgba(214,166,79,0.25)",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
