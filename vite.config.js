import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:
    "**/*.+(png|jpg|jpeg|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff|woff2|eot|ttf|otf|docx)",
});
