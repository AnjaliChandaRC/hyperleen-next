import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // global
        xxs: "10px",
        "2xxl": "32px",
        "3xxl": "80px",
      },
      colors: {
        blue: "#084CAF",
        grey: "#4E4E4E",
        light_blue: "#0A02EC14",
        pale_blue: "#E6EDF7",
        royal_blue: "#084CAF0A",
        light_grey: "#0101010D",
        smoke_blue: "#f2f6fb",
        smoke_grey: "#f5f5f5",
        light_black: "#0000000A",
        frosted_white: "#FFFFFF29",
        off_white: "#0101010D",
        light_skyblue: "#F2F6FB",
      },
      // cuttingEdge
      backgroundColor: {
        off_white_blue: "#F5F8FC",
        alice_blue: "#E5ECF6",
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
        "8xl": "0px 1px 37px 0px #00000026",
        "9xl": "0 0 15px #fff",
        "10xl": "15.01px -15.69px 68.22px -35.47px #084CAF14",
        "11xl": "2.11px -1.29px 28.66px 6.3px #084CAF14",
        "12xl": "-0.11px -0.11px 29.66px -3.7px #6F69F21F",
        "13xl": "6px -6px 37px -2px rgba(8, 76, 175, 0.3)",
        "14xl": "3px -9px 23px -2px rgba(8, 76, 175, 0.2)",
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
        header_bg: "url('/assets/images/home/webp/header-bg.webp')",
        footer_section: 'url("/assets/images/home/png/footer-bg-img.png")',
        ourTeam: 'url("/assets/images/home/webp/team-bg.webp")',
        global_bg: `url("/assets/images/ai-trainer/webp/global-bg-img.webp")`,
        trainer_hero: `url("/assets/images/ai-trainer/webp/trainer-hero-bg.webp")`,
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
