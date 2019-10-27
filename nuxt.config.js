
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Project Info',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#ffeb3b',
    failedColor: '#f44336',
    height: '2px'
  },
  /*
  ** Axios module
  */
  axios: {
    baseURL: 'http://172.29.17.118:8101'
  },
  /*
  ** Customize router
  */
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/default.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Sentry module statistics
  */
  sentry: {
    dsn: 'http://6a953e91925b4068847d6c7ec139a520@172.29.17.118:9000/3', // Enter your project's DSN here
    config: {} // Additional config
  }
}
