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
  return Cache.has(url)
}

export default async (ctx, next) => {
  if (ctx.url === '/favicon.ico') {
    ctx.body = '1'
  }
  if (isUrlMatchCache(ctx.url)) {
    console.log('render from cache')
    await ctx.render('index', Cache.get(ctx.url))
    return
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
  Cache.set(ctx.url, renderConfigs)
  next()
}