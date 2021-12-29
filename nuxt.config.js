export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ck-rent',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
                integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
                crossorigin: 'anonymous',
            },
        ],
        script: [{
                hid: 'stripe',
                src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                integrity: 'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
                crossorigin: 'anonymous',
            },
            {
                hid: 'stripe',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
                integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
                crossorigin: 'anonymous',
            },
            {
                hid: 'stripe',
                src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
                integrity: 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
                crossorigin: 'anonymous',
            },
            {
                hid: 'stripe',
                src: 'https://kit.fontawesome.com/eb192f51f9.js',
                crossorigin: 'anonymous',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/style.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '@/plugins/vuelidate', ssr: true }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/toast',
    ],
    toast: {
        position: 'top-center',
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: 'https://ckrent.tk/api/',
        headers: { 'Access-Control-Allow-Origin': '*' },
        changeOrigin: true,
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'Login/GetLogin',
                        method: 'post',
                        //propertyName: 'token',
                    },
                    user: false, //{ url: 'api/token/login-user', method: 'get', propertyName: false },

                    logout: false,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}