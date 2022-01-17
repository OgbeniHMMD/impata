import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00B69E",
          light: "#3DD381",
        },
      },
    },
  },
});
