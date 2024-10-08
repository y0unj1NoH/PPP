import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/saramin_localProxy": {
        target: "https://oapi.saramin.co.kr",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/saramin_localProxy/, "")
      }
    }
  }
});
