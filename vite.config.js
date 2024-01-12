import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tapan0708.github.io/React-portfolio/",
  plugins: [react()],
});
