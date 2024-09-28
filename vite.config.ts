import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@root": path.resolve(__dirname, "./"),
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]_[hash:base64:2]",
    },
  },
});
