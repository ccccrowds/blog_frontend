import 'isomorphic-fetch'
import config from 'server/config'

const getQueryString = (params = {}) => {
  const keys = Object.keys(params)
  if (!params || !keys.length) return ''

  return '?' + keys.map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')
};

export const post = (url, params) => {
  return fetch(`${config.host}:${config.port}` + url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(params)
  })
}

export const get = (url, params = {}) => {
  return fetch(url + getQueryString(params));
};