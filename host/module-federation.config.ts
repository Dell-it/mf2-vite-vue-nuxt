import * as Vue from "vue";
import * as VueRouter from "vue-router";

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
        },
        'vue-router': {
            version: '4.4.5',
            lib: () => VueRouter,
            shareConfig: {
                requiredVersion: '^4.4.5',
                singleton: true,
            }
        }
    },

    remotes: [
        {
            name: "manifest",
            entry: "/mf/mf-manifest.json",
            alias: "manifest_alias"
        },
        {
            name: "remote",
            entry: "/mf/remoteEntry.js",
            type: 'module',
            alias: "remote_alias"
        },
    ],
}