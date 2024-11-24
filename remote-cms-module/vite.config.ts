import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import {federation} from "@module-federation/vite";
import {serverPort} from "./package.json";


// https://vite.dev/config/
export default defineConfig({
  server: {
    origin: `http://localhost:${serverPort}`,
    port: serverPort
  },
  base: '/mf',
  plugins: [
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      manifest: {
        fileName: "mf-manifest.json",
      },
      exposes: {
        "./remote-component": "./src/components/TestComponent.vue",
        "./exportApp": "./src/exportApp.ts",
      },
      shared: {
        vue: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^3.5.12", // Укажите ту же версию, что и в хосте
        },
        'vue-router': {
          strictVersion: true,
          requiredVersion: '^4.4.5',
          singleton: true,
        }
      },
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
