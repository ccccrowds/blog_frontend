import { createAction } from 'redux-act'
import { actionCreator } from '@/common/redux.js'
import { get } from '@/common/fetch'

export const GET_POSTS_LIST_ACTIONS = actionCreator('get posts list')

export const getPostsList = (page = 1) => ({
  callAPI: () => get('/api/article', {
    current_page: page,
    page_size: 12
  }),
  types: GET_POSTS_LIST_ACTIONS,
  handleResult: res => res.data
})

