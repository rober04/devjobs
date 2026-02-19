import homeResolver from "./src/plugins/customResolver.js";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Components from "unplugin-react-components/vite";
import { resolve } from "path";
import type { ResolverComponent } from "unplugin-react-components/types";

export default defineConfig({
  plugins: [
    react(),

    Components({
      dts: true,
      resolvers: [homeResolver] as ResolverComponent[],
    }),
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
