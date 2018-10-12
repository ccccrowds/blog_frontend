import { combineReducers } from 'redux'
import { GET_TAG_LIST_ACTION, GET_ARTILE_TAG_ACTION } from '../actions'
import { reducerCreator } from '@/common/redux'

const [, GET_TAG_LIST_SUCCESS,] = GET_TAG_LIST_ACTION

const tagList = reducerCreator(GET_TAG_LIST_ACTION)({
  [GET_TAG_LIST_SUCCESS]: (state, list) => {
    return {
      ...state,
      list
    }
  }
}, {
  list: []
})

const [, GET_ARTICLE_SUCCESS,] = GET_ARTILE_TAG_ACTION

const articleList = reducerCreator(GET_ARTILE_TAG_ACTION)({
  [GET_ARTICLE_SUCCESS]: (state, list) => {
    console.log(111,list)
    return {
      ...state,
      list
    }
  }
}, {
  list: []
})

export default combineReducers({
  tagList,
  articleList
})