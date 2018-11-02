// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    entry: {
      app: './client/client-entry.js',
      vendor: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        'react-router-config',
        'redial',
        'redux-thunk'
      ]
    },
    ssr: true, // use server-side render
    index: 'index.html',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: false
  },
  server: {
    entry: {
      app: './server/index.js'
    },
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'server',
  },
  dev: {
    entry: {
      index: [
        './client/client-entry.js',
        'webpack-hot-middleware/client?noInfo=true&reload=true'
      ]
    },
    port: 8089,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {}
  }
}
