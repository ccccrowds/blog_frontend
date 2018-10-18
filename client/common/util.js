export const getParams = (url) => {
  let ret = decodeURIComponent(url)
  if (url.indexOf('?') >= 0) {
    ret = ret.slice(1)
  }
  return ret.split('&').map(item => item.split('='))
    .reduce((total, item) => {
      total[item[0]] = item[1]
      return total
    }, {})
  return ret
}