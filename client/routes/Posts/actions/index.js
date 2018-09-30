import { createAction } from 'redux-act'
import { actionCreator } from '@/common/redux.js'
import { get } from '@/common/fetch'

// 文章列表
export const GET_POSTS_LIST_ACTIONS = actionCreator('get posts list')

export const getPostsList = (page = 1) => ({
  callAPI: () => get('/api/article', {
    current_page: page,
    page_size: 12
  }),
  types: GET_POSTS_LIST_ACTIONS,
  handleResult: res => res.data
})

// 分类列表
export const GET_TYPE_LIST_ACTIONS = actionCreator('get type list')

export const getTypeList = () => ({
  callAPI: () => get('/api/types'),
  types: GET_TYPE_LIST_ACTIONS,
  handleResult: res => res.data
})

