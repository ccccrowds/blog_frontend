process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var shelljs = require('shelljs')
var spinner = ora('building for production...')
var fs = require('fs')
spinner.start()

module.exports = function (webpackConfig, assets, cb) {
  rm(assets, err => {
    if (err) throw err
    webpack(webpackConfig, function (err, stats) {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      cb && cb()
      console.log(chalk.cyan('  Build complete.\n'))
    })
  })
}
