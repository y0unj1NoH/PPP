import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/saraminApi": {
        target: "https://oapi.saramin.co.kr",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/saraminApi/, "/job-search")
      }
    }
  }
});
