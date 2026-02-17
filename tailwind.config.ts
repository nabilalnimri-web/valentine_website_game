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
        omnitrix: {
          green: "#00FF00",
          "green-dark": "#00CC00",
          "green-glow": "rgba(0, 255, 0, 0.5)",
          black: "#0A0A0A",
          charcoal: "#1A1A1A",
        },
        villain: {
          red: "#FF0000",
          purple: "#8B00FF",
        },
        hero: {
          blue: "#0077FF",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        exo: ["var(--font-exo)"],
      }
    },
  },
  plugins: [],
};
export default config;
