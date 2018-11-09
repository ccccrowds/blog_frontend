import Router from 'koa-router'
import path from 'path'
import config from '../config'
import { post, get } from '@/common/fetch'
import Cache from '../cache'

const router = new Router({
  prefix: '/api'
})

const cache = new Cache({
  cachePath: path.join(__dirname, '..', '.cache')
})

router.get('/*', async (ctx) => {
  const url = ctx.url.replace('/api', '')
  const content = await cache.get(url)
  if (content) {
    console.log('get from cache : ' + url)
    ctx.body = content
  } else {
    const res = await get(config.backendHost + url)
      .then(res => res.json())
    ctx.body = res
    cache.set(url, res)
  }
  
})
export default router