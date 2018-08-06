import loadableComp from '@/common/loadableComp'
import Posts from './Posts'

export default [{
  path: '/',
  exact: true,
  component: Posts
}, {
  path: '/detail/:id',
  component: loadableComp(
    () => import(/* webpackChunkName: 'detail' */ './Detail/index.js')
  )
}]