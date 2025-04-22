// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/9m-4l/", // 👈 This MUST match your repo name
  plugins: [react()],
});
