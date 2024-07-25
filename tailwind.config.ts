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
        light_grey: "#0101010D",
        smoke_blue: "#f2f6fb",
        smoke_grey: "#f5f5f5",
        // add a light black color
        light_black: "#0000000A",
        smoke_grey2: "#FFFFFF29",
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
          "2xl": "1368px",
        },
      },
      screens: {
        xl: "1200px",
      },
      backgroundImage: {
        header_bg: "url('/assets/images/home/png/header_bg.png')",
        footerSection: 'url("/assets/images/home/png/footer-bg-img.png")',
        ourTeam: `url("/assets/images/home/webp/team_Bg.webp")`,
        teamLayer: `url("/assets/images/home/webp/team_Layer.webp")`,
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
