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
        primary: {
          DEFAULT: "#B0285C",
          hover: "#921B48",
          soft: "#FDE3EC",
        },
        secondary: {
          DEFAULT: "#5E378F",
          soft: "#EFE7FD",
        },
        accent: {
          yellow: "#F8D940",
          "yellow-soft": "#FEF7D9",
          "yellow-border": "#8F660F",
          green: "#B1DD30",
          "green-soft": "#F2F9DF",
          "green-border": "#517B11",
          cyan: "#83DDE6",
          "cyan-soft": "#E4F8FA",
          "cyan-border": "#327790",
          pink: "#F6598B",
          "pink-border": "#921B48",
          purple: "#AF89F6",
        },
        brand: {
          bg: "#FBF5E2",
          "bg-alt": "#F6F0DA",
          surface: "#FFFFFF",
          border: "#E7D6AC",
          "border-strong": "#D9C27E",
          text: "#2C384D",
          "text-body": "#3E4A60",
          "text-muted": "#5B6577",
          ink: "#604818",
          dark: "#2C384D",
        },
      },
      fontFamily: {
        arabic: ["var(--font-ibm-plex-sans-arabic)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "12px",
        md: "20px",
        lg: "28px",
        xl: "36px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(44, 56, 77, 0.06)",
        hover: "0 8px 24px rgba(44, 56, 77, 0.12)",
        cta: "0 8px 20px rgba(176, 40, 92, 0.22)",
        floating: "0 6px 20px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
