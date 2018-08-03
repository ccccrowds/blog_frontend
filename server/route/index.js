import Router from 'koa-router'
import config from '../config'
import { post, get } from '@/common/fetch'

const router = new Router({
  prefix: '/api'
})

router.get('/*', async (ctx) => {
  const url = ctx.url.replace('/api', '')
  const res = await get(config.backendHost + url)
    .then(res => res.json())
  ctx.body = res
})
export default router