import { actionCreator } from '@/common/redux.js'
import { get } from '@/common/fetch'

export const GET_TAG_LIST_ACTION = actionCreator('get tag list')

export const getTagList = () => ({
  callAPI: () => get('/api/tags'),
  types: GET_TAG_LIST_ACTION,
  handleResult: res => res.data
})

export const GET_ARTILE_TAG_ACTION = actionCreator('get article tag')

export const getArticleGroupByTag = () => ({
  callAPI: () => get('/api/article/group'),
  types: GET_ARTILE_TAG_ACTION,
  handleResult: res => res.data
})

