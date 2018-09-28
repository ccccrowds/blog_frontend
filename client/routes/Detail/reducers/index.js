import { combineReducers } from 'redux'
import { GET_POSTS_DETAIL_ACTIONS } from '../actions'
import { reducerCreator } from '@/common/redux'

const [, GET_POSTS_DETAIL_SUCCESS,] = GET_POSTS_DETAIL_ACTIONS

const postsDetail = reducerCreator(GET_POSTS_DETAIL_ACTIONS)({
  [GET_POSTS_DETAIL_SUCCESS]: (state, payload) => {
    return {
      ...state,
      item: payload
    }
  }
}, {
  item: null
})

export default combineReducers({
  postsDetail
})