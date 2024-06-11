import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        base: "1",
        floating: "2",
        dropdown: "999",
        nav: "9999",
      },
      gridTemplateColumns: {
        "2-auto": "repeat(2, auto)",
      },
      colors: {
        "main-blue": "#3692ff",
        "dark-main-blue": "#2f80ed",
        "gray-50": "#f7f7f8",
        "gray-100": "#e8ebed",
        "gray-200": "#e5e7eb",
        "gray-400": "#9ea4a8",
        "gray-500": "#72787f",
        "gray-600": "#454c53",
        "gray-800": "#26282b",
        "gray-900": "#1b1d1f",
        "cool-gray-200": "#f9fafb",
        "cool-gray-300": "#f3f4f6",
        "cool-gray-400": "#9ca3af",
        "cool-gray-500": "#6b7280",
        "cool-gray-600": "#4b5563",
        "cool-gray-700": "#374151",
        "cool-gray-800": "#1f2937",
        "cool-gray-900": "#111827",
        error: "#f74747",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};

export default config;
