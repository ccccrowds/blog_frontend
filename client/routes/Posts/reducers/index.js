import { combineReducers } from 'redux'
import { GET_POSTS_LIST_ACTIONS } from '../actions'
import { reducerCreator } from '@/common/redux'

const [, GET_POSTS_LIST_SUCCESS,] = GET_POSTS_LIST_ACTIONS

const postsList = reducerCreator(GET_POSTS_LIST_ACTIONS)({
  [GET_POSTS_LIST_SUCCESS]: (state, { list, page }) => {
    let { list: curList } = state

    if (page.page === 1) {
      return {
        ...state,
        list,
        page
      }
    } else {
      return {
        ...state,
        list: [...curList].concat(list),
        page
      }
    }
  }
}, {
  list: [],
  page: {}
})

export default combineReducers({
  postsList
})