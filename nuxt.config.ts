// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'GATHS Application Portal',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',

    ],
    build: {},
    ssr: true,
    dir: {
        public: "public",
    },
    runtimeConfig: {
        public: {
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_KEY: process.env.SUPABASE_KEY,
        },
    },
    // buildModules:[
    //     '@pinia/nuxt', 
    //     '@nuxt/typescript-build',
    //     '@nuxtjs/supabase',
    //     '@nuxt/image'
    // ]
    //buildModules?: ['@pinia/nuxt', '@nuxtjs/supabase'],
});
