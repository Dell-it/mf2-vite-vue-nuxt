export default defineNuxtConfig({
    app: {
        head: {
            script: [
                {type: 'esms-options', innerHTML: '{ "shimMode": true }'},
                {src: 'https://unpkg.com/es-module-shims', defer: true},
            ]
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: false,
    routeRules: {
        '/mf/**': {
            redirect: 'http://localhost:4174/mf/**',
        }
    },
    vite: {
        resolve: {
            alias: {
                // vue: "vue/dist/vue.esm-bundler.js",
                // "@": path.resolve(__dirname, "src"),
                // pinia: path.resolve(__dirname, "./node_modules/pinia/dist/pinia.mjs"),
                // shared: path.resolve(__dirname, "../shared/shared"),
            },
        },
        build: {
            target: "chrome89",
        },
    }
})
