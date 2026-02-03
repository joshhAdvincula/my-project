/*
  PURPOSE:
  - Tell Next.js how to process CSS
  - Register Tailwind CSS as a PostCSS plugin
  - Enable autoprefixer for browser compatibility
*/

module.exports = {
  plugins: {
    /*
      Tailwind CSS:
      - Reads tailwind.config.ts
      - Generates utility classes
    */
    "@tailwindcss/postcss": {},

    /*
      Autoprefixer:
      - Adds vendor prefixes automatically
      - Improves cross-browser support
    */
    autoprefixer: {},
  },
};
