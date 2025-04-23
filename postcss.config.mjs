const config = {
  theme: {
    extend: {
      fontFamily: {
        mark: ['"Mark Regular"', "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em", // -5%
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
};

export default config;
