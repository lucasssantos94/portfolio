import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: '#011627',
        royalBlue: '#4D5BCE',
        slateGray: '#607B96',
        lightSalmon: '#FEA55F',
        turquise: '#43D9AD',
        midnightBlue: '#011221',
        darkSlate: '#1E2D3D',
      }
    },
  },
  plugins: [],
};
export default config;
