// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        
    ],
    build:[],
    buildModules:[
        '@pinia/nuxt', 
        '@nuxtjs/supabase'
    ]
    //buildModules?: ['@pinia/nuxt', '@nuxtjs/supabase'],
});
