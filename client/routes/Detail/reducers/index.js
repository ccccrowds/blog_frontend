import { combineReducers } from 'redux'
import { GET_POSTS_DETAIL_ACTIONS } from '../actions'
import { reducerCreator } from '@/common/redux'

const [, GET_POSTS_DETAIL_SUCCESS,] = GET_POSTS_DETAIL_ACTIONS

const postsDetail = reducerCreator(GET_POSTS_DETAIL_ACTIONS)({
  [GET_POSTS_DETAIL_SUCCESS]: (state, payload) => {
    console.log(111, payload)
    return {
      ...state,
      item: payload ? payload[0] : null
    }
  }
}, {
  item: null
})

export default combineReducers({
  postsDetail
})