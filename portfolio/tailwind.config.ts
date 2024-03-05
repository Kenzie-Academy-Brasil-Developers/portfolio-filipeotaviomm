import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   inter: ["var(--font-inter"],
      // },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "860px",
        lg: "1024px",
        xl: "1280px",
      },
      width: {
        42: "45",
        58: "55",
      },
      fontSize: {
        xs: "16px",
        sm: "18px",
        md: "24px",
        lg: "28px",
        xl: "32px",
      },
      colors: {
        gray: {
          primary: "#0A0A0B",
          secondary: "#121214",
          tertiary: "#868E96",
          quarternary: "#d3d3d3",
        },
        white: {
          primary: "#FFFFFF",
        },
        purple: {
          primary: "#623CEA",
          secondary: "#311E75",
        },
      },
    },
  },
  plugins: [],
  // purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
};
export default config;
