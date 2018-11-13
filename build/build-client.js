var path = require('path')
var config = require('../config')
var build = require('./build')
var webpackConfig = require('./webpack.prod.conf')
var shell = require('shelljs')
var resolve = p => path.resolve(__dirname, p)

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

build(webpackConfig, assetsPath, function () {
  shell.mv(resolve('../service-worker.js'), '../dist/')
})