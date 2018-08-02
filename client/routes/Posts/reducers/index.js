import { combineReducers } from 'redux'
import { GET_POSTS_LIST_ACTIONS } from '../actions'
import { reducerCreator } from '@/common/redux'

const [, GET_POSTS_LIST_SUCCESS,] = GET_POSTS_LIST_ACTIONS

const postsList = reducerCreator(GET_POSTS_LIST_ACTIONS)({
  [GET_POSTS_LIST_SUCCESS]: (state, payload) => {
    return {
      ...state,
      list: payload.results,
      count: payload.count
    }
  }
}, {
  list: [],
  count: 0
})

export default combineReducers({
  postsList
})