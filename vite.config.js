import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import path from "path";
import context from "./data/index.js";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, "components"),
      context
    })
  ]
});