import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0E1116",
          secondary: "#161A1F",
          surface: "#1E2228",
          elevated: "#242A31",
        },
        accent: {
          primary: "#4ADE80",
          secondary: "#22C55E",
          warning: "#FACC15",
          error: "#EF4444",
          info: "#3B82F6",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0AEC0",
          muted: "#6B7280",
          inverse: "#000000",
        },
        borders: {
          light: "#2D3239",
          medium: "#3A4048",
        },
        states: {
          hover: "rgba(255,255,255,0.05)",
          active: "rgba(255,255,255,0.08)",
          selected: "rgba(74,222,128,0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        round: "999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.3)",
        md: "0 4px 8px rgba(0,0,0,0.4)",
        lg: "0 8px 20px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
