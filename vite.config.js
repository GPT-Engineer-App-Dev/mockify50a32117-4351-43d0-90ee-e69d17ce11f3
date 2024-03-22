import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "::",
    port: "8100",
    strictPort: true,
    hmr: {
      // tell the client to connect to the https port
      clientPort: "8143",
    }
  },
  plugins: [react()],
  base: "",
});
