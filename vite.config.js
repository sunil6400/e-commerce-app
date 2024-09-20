// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";

// Replace 'your-username' and 'your-repo' with your GitHub username and repository name
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/e-commerce-app/", // base should match the repository name for GitHub Pages
});
