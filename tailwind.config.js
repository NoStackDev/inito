/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)", "system-ui", "ui-sans-serif"],
      display: ["var(--font-montserrat)", "system-ui", "Oswald"],
      body: ["var(--font-montserrat)", "system-ui", '"Open Sans"'],
    },

    colors: {
      "primary/dark-green": "#112D35",
      "primary/acquamarine": "#1F94AA",
      "secondary/white": "#FFFFFF",
      "secondary/sage": "#3F555D",
      "secondary/light-grey": "#D9D9D9",
      "secondary/grey-green": "#88969A",
      "secondary/grey": "#C4C4C4",
      "additional/light-purple": "#F7F7FE",
      "additional/purple-1": "#AA92E1",
      "additional/purple-2": "#D0CDFE",
      "additional/yellow": "#FFD056",
      "additional/grey-purple": "#EEEEF5",
    },

    fontSize: {
      xsm: ["0.75rem", "1.125rem"],
      sm: ["0.875rem", "1.375rem"],
      base: ["1rem", "1.625rem"],
      "3xl": ["1.125rem", "1.6875rem"],
      "4xl": ["2.25rem", "3.125rem"],
      "5xl": ["1.5rem", "2rem"],
      "6xl": ["3rem", "3.625rem"],
    },
    backgroundImage: {
      star1: "url('/star1.svg')",
      star2: "url('/star2.svg')",
      star3: "url('/star3.svg')",
      star4: "url('/star4.svg')",
    },
    extend: {},
  },
  plugins: [],
};
