import { getBundles } from 'react-loadable/webpack'

import entry from '@/server-entry'
import createStore from '@/store'
import config from '../../config/index'
import Cache from '@/common/cache'

const path = require('path')
const fs = require('fs')
const statsPath = path.join(config.build.assetsRoot, 'react-loadable.json')
const statsStr = fs.readFileSync(statsPath, 'utf8')
const stats = JSON.parse(statsStr)
const cache = new Cache()

function generateBundleScripts (modules) {
  const bundles = getBundles(stats, modules)
  return bundles
    .filter(bundle => bundle && bundle.file.endsWith('.js'))
    .map(bundle => {
      return `<script type="text/javascript" src="${bundle.publicPath}"></script>`
    })
    .join('\n')
}

function isUrlMatchCache(url) {
  return cache.has(url)
}
function isUrlMatchStatic(url) {
  return url.indexOf('/static/') >= 0
}

export default async (ctx, next) => {
  if (isUrlMatchCache(ctx.url)) {
    await ctx.render('index', cache.get(ctx.url))
    return next()
  }
  if (isUrlMatchStatic(ctx.url)) {
    return next()
  }
  const context = {}
  const store = createStore()
  const modules = []
  const app = await entry(ctx.url, context, store, modules)
  if (context.url) {
    return
  }
  const scripts = generateBundleScripts(app.modules)
  const renderConfigs = {
    title: "Athon's Blog",
    root: app.html,
    state: store.getState(),
    scripts
  }
  await ctx.render('index', renderConfigs)
  cache.set(ctx.url, renderConfigs)
  next()
}