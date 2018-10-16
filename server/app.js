import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import router from './route'
import favicon from 'koa-favicon'
import path from 'path'
// const cors = require('koa2-cors')

const app = new Koa()

// app.use(cors())

app.use(bodyParser())
app.use(logger())
app.use(favicon(path.join(__dirname, '../favicon.ico')))

app.use(router.routes())
  .use(router.allowedMethods())

export default app
