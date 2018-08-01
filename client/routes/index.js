import loadableComp from '@/common/loadableComp'
import Posts from './Posts'

export default [{
  path: '/',
  exact: true,
  component: Posts
}, {
  path: '/detail',
  component: loadableComp(
    () => import(/* webpackChunkName: 'Posts' */ './Posts/index.js')
  )
}]