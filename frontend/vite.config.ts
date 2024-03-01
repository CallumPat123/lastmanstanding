import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      // Depending on your setup, you might need to adjust this.
      // For Docker, ensure this matches the public hostname or IP you use to access the app.
      host: "localhost",
      clientPort: 3000, // The port on the host where the browser accesses the app.
    },
    watch: {
      usePolling: true, // Important for Docker setups on Windows/Mac
    },
  },
});
