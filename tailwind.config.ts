import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'poppins': "'Poppins',sans-serif",
        },
        fontSize: {
          "2xxl": "32px",
          "3xxl": "80px"
        },
        colors: {
          blue: "#084CAF",
          grey: "#4E4E4E",
          light_blue: "#0A02EC14",
          light_grey: "#0101010D",
          smoke_blue: "#f2f6fb",
          smoke_grey: "#f5f5f5",
        },
        lineHeight: {
          "sm": "23.67px",
          "md": "28px",
          "lg": "34.8px",
          "xl": "43.2px",
          "2xl": "57.6px",
          "3xl": "80px",
        },

        boxShadow: {
          '3xl': '4px 4px 20px 0px ##084CAF4D',
        },
        container: {
          padding: {
            DEFAULT: "20px",
            sm: "24px",
          },
          center: true,
          screens: {
            lg: "1040px",
            xl: "1188px",
            "2xl": "1368px"
          },
        },
        screens: {
          xl: "1200px",
        },
      }
    },
  },
  plugins: [],
};
export default config;
