// import loadableComp from '@/common/loadableComp'
import Post from './container/Posts'
import Detail from './container/Detail'
export default [{
  path: '/',
  exact: true,
  component: Post
}, {
  path: '/detail',
  component: Detail
}]