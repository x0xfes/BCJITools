module.exports = {
  publicPath: '/BCJITools/',
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.js',
      title: "BCJI Tools"
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
