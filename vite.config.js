import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://routing-practice-bar-website-react.vercel.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  base: "/routing-practice-bar-website-react/",
});
