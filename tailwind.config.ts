import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#09a404',
        'primary_alt': '#bf7e04',
        'secondary': '#208c4f',
        'secondary_alt': '#0D4023',
        'neutral': '#592b02',
        'gray_light': '#6B7280',
        'gray_dark': '##1F2937',
        'gray_very_dark': '#111827',
      }
    },

  },
  plugins: [],
};
export default config;
