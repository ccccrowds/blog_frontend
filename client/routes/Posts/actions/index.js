import { createAction } from 'redux-act'
import { actionCreator } from '@/common/redux.js'
import { get } from '@/common/fetch'

export const GET_POSTS_LIST_ACTIONS = actionCreator('get posts list')

export const getPostsList = params => ({
  callAPI: () => get('/api/blog'),
  types: GET_POSTS_LIST_ACTIONS
})

