import Loadable from 'react-loadable'
import Loading from './loading'

/**
 * 异步引入组件
 */
export default (loader) => {
  return Loadable({
    loader: () => import(`../routes/${loader}`).then(res => res.default ? res.default : res),
    loading: Loading,
  })
}
