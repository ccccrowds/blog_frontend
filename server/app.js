import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import router from './route'
import favicon from 'koa-favicon'
import path from 'path'
import views from 'koa-views'
import serve from 'koa-static'
// const cors = require('koa2-cors')
import ssrMiddleWare from './middleware/server-render'

const resolve = p => path.resolve(__dirname, p)
const staticRoot = resolve('../dist')

const app = new Koa()

// app.use(cors())
app.use(views(staticRoot, { map: { html: 'ejs' } }))

app.use(ssrMiddleWare)

app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use(serve(staticRoot, {
  // one month cache for prod
  index: 'index.js',
  maxage: 2592000000,
  gzip: true,
}))


app.use(bodyParser())
app.use(logger())

app.use(router.routes())
  .use(router.allowedMethods())

export default app
