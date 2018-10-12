import { combineReducers } from 'redux'
import { GET_POSTS_LIST_ACTIONS, GET_TYPE_LIST_ACTIONS } from '../actions'
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

const [, GET_TYPE_LIST_SUCCESS,] = GET_TYPE_LIST_ACTIONS

const typeList = reducerCreator(GET_TYPE_LIST_ACTIONS)({
  [GET_TYPE_LIST_SUCCESS]: (state, list) => {
    return {
      ...state,
      list
    }
  }
}, {
  list: []
})

export default combineReducers({
  postsList,
  typeList
})