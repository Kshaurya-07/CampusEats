import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#ffefd9",
          muted: "rgba(255, 239, 217, 0.6)",
          subtle: "rgba(255, 239, 217, 0.15)",
          light: "#fff7ed",
        },
        dark: {
          DEFAULT: "#401500",
          muted: "rgba(64, 21, 0, 0.65)",
          subtle: "rgba(64, 21, 0, 0.12)",
          card: "#341100",
        },
        orange: {
          DEFAULT: "#ff9500",
          hover: "#e68600",
          logo: "#E05A0C",
        },
      },
      fontFamily: {
        londrina: ["var(--font-londrina)", "Londrina Solid", "sans-serif"],
        andika: ["var(--font-andika)", "Andika", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "marquee-left": "marqueeLeft 25s linear infinite",
        "marquee-right": "marqueeRight 25s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
