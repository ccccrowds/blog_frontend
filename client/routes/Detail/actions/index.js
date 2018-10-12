import { actionCreator } from '@/common/redux.js'
import { get } from '@/common/fetch'

export const GET_POSTS_DETAIL_ACTIONS = actionCreator('get posts detail')

export const getPostsDetail = id => ({
  callAPI: () => get(`/api/article/detail?id=${id}`),
  types: GET_POSTS_DETAIL_ACTIONS,
  handleResult: res => res.data
})

