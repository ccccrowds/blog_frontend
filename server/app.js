import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import proxy from 'koa-better-http-proxy'
// import session from 'koa-session'
// import compress from 'koa-compress'
import convert from 'koa-convert'
import router from './route'
import config from './config'
import url from 'url'
const cors = require('koa2-cors')

const app = new Koa()

app.use(cors())

// app.keys = ['this is a fucking secret']
// app.use(convert(session(app)))
// app.use(compress())
app.use(bodyParser())
// app.use(json())
app.use(logger())

// .use(proxy(config.backendHost, {
//   filter: (ctx) => {
//     return ctx.url.startsWith('/api');
//   },
//   proxyReqPathResolver: function(ctx) {
//     console.log(url.parse(ctx.url).path.replace('/api', ''))
//     return config.backendHost + url.parse(ctx.url).path.replace('/api', '')
//   }
// }))

app.use(router.routes())
  .use(router.allowedMethods())

export default app
