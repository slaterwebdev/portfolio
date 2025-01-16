import tailwind from "./tailwind.config.js";

export default {
  plugins: {
    tailwindcss: { config: tailwind },
    autoprefixer: {},
  },
};