import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { federation } from "@module-federation/vite";


// https://vite.dev/config/
export default defineConfig({
  server: {
    // origin: "http://localhost:4174",
    port: 4174
  },
  base: '/mf',
  plugins: [
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      manifest: {
        fileName: "mf-manifest.json",
        filePath: './',
      },
      exposes: {
        "./remote-component": "./src/components/TestComponent.vue",
      },
      shared: {
        vue: {
          singleton: true,
          strictVersion: true,
          version: "3.5.12",
          requiredVersion: "^3.5.12", // Укажите ту же версию, что и в хосте
        },
      },
      remotes: {},
    }),
    vue(),
    vueDevTools(),
  ],
  build: {
    target: "chrome89",
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
})
