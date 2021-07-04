require('dotenv').config()
export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'goodbye-felix',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Handlee&display=swap"
            }
        ],
        script: [
            { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js" }
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    purgeCSS: {
        whitelist: ['dark-mode'],
    },

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/cloudinary',
        '@nuxtjs/dotenv',
        '@nuxtjs/strapi',
    ],

    strapi: {
        entities: ['goodbyes']
    },

    cloudinary: {
        cloudName: process.env.CLOUDNAME,
        useComponent: true,
    },

    loading: {
        color: 'yellow',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}