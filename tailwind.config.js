/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["var(--font-arcade)"],
        raleway: ["var(--font-raleway)"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#fff",
            h1: {
              color: "fff",
            },
            h2: {
              color: "fff",
            },
            h3: {
              color: "fff",
            },
            strong: {
              color: "#fff",
            },
            blockquote: {
              color: "#fff",
            },
            a: {
              color: theme("colors.purple.300"),
            },
            // "::before": {
            //   color: theme("colors.purple.300"),
            // },
            // "::after": {
            //   color: theme("colors.purple.300"),
            // },
            code: {
              color: theme("colors.green.300"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
