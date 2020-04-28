const webpack = require("webpack")

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/stylesheets/base.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/global',
    '@/plugins/element-ui',
    { src: '@/plugins/fullpage', mode: 'client' },
    { src: '@/plugins/chart', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Styles
    '@nuxtjs/style-resources',
    // FontAwesome
    '@nuxtjs/fontawesome'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Devices,
    '@nuxtjs/device',
    // FullPage
    // 'nuxt-fullpage.js',
    // Bulma
    '@nuxtjs/bulma',
    // Fonts
    'nuxt-webfontloader'
  ],
  /*
   ** Font Awesome
  */
  fontawesome: {
    icons: {
      solid: ['faEnvelope'],
      brands: ['faFacebook', 'faInstagram', 'faMedium', 'faWhatsapp']
    }
  },
  /*
   ** Styles
  */
  styleResources: {
    sass: [
      '@/assets/stylesheets/variables/*.sass'
    ]
  },
  /*
   ** Fonts
  */
  webfontloader: {
    google: {
      families: ['Manjari:100,400,700']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
}
