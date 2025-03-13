import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED3163',
      },
      boxShadow: {
        glow: "0px 0px 300px 0px rgba(237, 49, 99, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
