module.exports = {
  pluginOptions: {
    quasar: {},
    i18n: {
      locale: 'nl',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  transpileDependencies: [
    /node_modules\/quasar\//
  ]
}
