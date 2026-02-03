import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004aad",
        secondary: "#5F6368",
        accent: "#F9AB00",
        muted: "#F1F3F4",
        heading1:"000000",
      },
    },
  },
  plugins: [],
};

export default config;
