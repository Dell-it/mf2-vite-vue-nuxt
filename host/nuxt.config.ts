import {createProxyMiddleware} from "http-proxy-middleware";
import path from "node:path";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: false,
    routeRules: {
        '/mf/**': {
            proxy: 'http://localhost:4174/mf/**',
        }
    },
    vite: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                // pinia: path.resolve(__dirname, "./node_modules/pinia/dist/pinia.mjs"),
            },
        },
        build: {
            target: "chrome89",
        },
    }
})
