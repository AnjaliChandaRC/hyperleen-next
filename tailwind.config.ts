import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins',sans-serif",
      },
      fontSize: {
        "2xxl": "32px",
        "3xxl": "80px",
      },
      colors: {
        blue: "#084CAF",
        grey: "#4E4E4E",
        light_blue: "#0A02EC14",
        light_blue2: "#E6EDF7",
        light_blue3: " #084CAF0A",
        light_grey: "#0101010D",
        smoke_blue: "#f2f6fb",
        smoke_grey: "#f5f5f5",
        light_black: "#0000000A",
        smoke_grey2: "#FFFFFF29",
        off_white: "#0101010D",
      },
      backgroundColor: {
        light_blue: "#F5F8FC",
      },
      lineHeight: {
        sm: "34.8px",
        md: "43.2px",
        lg: "57.6px",
        xl: "80px",
      },
      boxShadow: {
        "3xl": "4px 4px 20px 0px #084CAF4D",
        "4xl": "0px 4px 4px 0px #00000040",
        "5xl": "-2.41px 4.41px 37.77px 1.76px #6F69F21F",
        "6xl": "-8.88px 5.88px 58.83px 4.37px #6F69F21F",
        "7xl": "7.88px -8.24px 35.83px -18.63px #084CAF14",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          sm: "24px",
          xl: "20px",
        },
        center: true,
        screens: {
          lg: "1040px",
        },
      },
      screens: {
        xl: "1200px",
      },
      backgroundImage: {
        header_bg: "url('/assets/images/home/png/header_bg.png')",
        footer_section: 'url("/assets/images/home/png/footer-bg-img.png")',
        ourTeam: `url("/assets/images/home/webp/team_bg.webp")`,
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadowColor: {
        WhiteShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px",
      },
      padding: {
        lg: "71px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
