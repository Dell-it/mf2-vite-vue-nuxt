import * as Vue from "vue";

export const configuration = {
    name: 'host-app-nuxt',
    shared: {
        'vue': {
            version: '3.5.13',
            lib: () => Vue,
            shareConfig: {
                requiredVersion: '^3.5.13',
                singleton: true,
            }
        }
    },

    remotes: [
        {
            name: "manifest",
            entry: "http://localhost:4174/mf/mf-manifest.json",
            alias: "manifest_alias"
        },
        {
            name: "remote",
            entry: "http://localhost:4174/mf/remoteEntry.js",
            type: 'module',
            alias: "remote_alias"
        },
    ],
}