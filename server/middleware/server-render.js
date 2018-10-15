import { getBundles } from 'react-loadable/webpack'

import entry from '@/server-entry'
import createStore from '@/store'
import config from '../../config/index'

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

export default async (ctx, next) => {
  if (ctx.url === '/favicon.ico') {
    ctx.body = '1'
  }
  console.log('start', new Date())
  const context = {}
  const store = createStore()
  const modules = []
  const app = await entry(ctx.url, context, store, modules)
  if (context.url) {
    return
  }
  console.log('finish Render', new Date())
  const scripts = generateBundleScripts(app.modules)
  console.log('finish scripts', new Date())
  await ctx.render('index', {
    title: "Athon's Blog",
    root: app.html,
    state: store.getState(),
    scripts
  })
  console.log('finish last render', new Date())
  next()
}