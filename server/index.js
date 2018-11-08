import views from 'koa-views'
import serve from 'koa-static'
import path from 'path'
import Loadable from 'react-loadable'

import config from './config'
import app from './app'
import ssrMiddleWare from './middleware/server-render'

const resolve = p => path.resolve(__dirname, p)
const staticRoot = resolve('../dist')

app.use(views(staticRoot, { map: { html: 'ejs' } }))

app.use(serve(staticRoot, {
  index: 'a.js',
  maxage: 315360000 * 1000,
  gzip: true
}))

app.use(ssrMiddleWare)

const { port } = config

const uri = 'http://localhost:' + port

Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.log('> Listening at ' + uri + '\n')
  })
})
