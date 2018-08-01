import Loadable from 'react-loadable'
import Loading from './loading'

/**
 * 异步引入组件
 */
export default (loader) => {
  return Loadable({
    loader: () => {
      return loader().then(object => object.default)
    },
    loading: Loading,
  })
}
