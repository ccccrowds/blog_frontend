import loadableComp from '@/common/loadableComp'
import Posts from './Posts'

export default [{
  path: '/',
  exact: true,
  component: Posts
}, {
  path: '/detail/:id',
  component: loadableComp('Detail/index.js')
}, {
  path: '/tags',
  component: loadableComp('Tags/index.js')
}, {
  path: '/archives',
  component: loadableComp('Archives/index.js')
}]
// export default [{
//   path: '/',
//   exact: true,
//   component: Posts
// }, {
//   path: '/detail/:id',
//   component: loadableComp(
//     () => import(/* webpackChunkName: 'detail' */ './Detail/index.js')
//   )
// }, {
//   path: '/tags',
//   component: loadableComp(
//     () => import(/* webpackChunkName: 'tags' */ './Tags/index.js')
//   )
// }, {
//   path: '/archives',
//   component: loadableComp(
//     () => import(/* webpackChunkName: 'archives' */ './Archives/index.js')
//   )
// }]