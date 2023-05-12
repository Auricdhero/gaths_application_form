import colors from 'vuetify/es5/util/colors'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'GATHS Application',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/amplify.js', mode: 'client' },
    { src: '~/plugins/auth' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // router: {
  //   middleware: ["auth"]
  // },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  router: {
    //  middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
  ],
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: "access_token",
  //         type: "Bearer"
  //       },
  //       endpoints: {
  //         user: false,
  //       },
  //       clientId: process.env.client_id,
  //       scope: ["email", "openid", "profile"]
  //     }
  //   },
  //   redirect: {
  //     home: "/user/",
  //     login: "/",
  //     logout: "/"
  //   }
  // },

  // compilerOptions: {
  //   "types": [
  //     "@nuxtjs/auth-next",
  //   ]
  // },

  serverMiddleware:{
    // '/api': '~/api'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
