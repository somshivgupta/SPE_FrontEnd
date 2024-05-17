import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 5173,
  strictPort: true,
 },
 server: {
  port: 5173,
    strictPort: true,
    host: '0.0.0.0',
    origin: "http://192.168.56.1:5173",
 },
});
