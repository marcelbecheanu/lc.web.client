import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        "favicon.svg",
        "/favicon/favicon.ico",
        "robots.txt",
        "/favicon/apple-touch-icon.png",
      ],
      registerType: "autoUpdate",
      manifest: {
        name: "Light Code",
        short_name: "Light Code",
        icons: [
          {
            src: "/favicon/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#FFF",
        background_color: "#FFF",
        display: "standalone",
        start_url: "/",
        lang: "pt-PT",
        orientation: "portrait-primary",
      },
    }),
  ],
})
