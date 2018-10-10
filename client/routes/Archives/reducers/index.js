import { combineReducers } from 'redux'
import { GET_ARCHIVE_ACTION } from '../actions'
import { reducerCreator } from '@/common/redux'

const [, GET_ARCHIVE_SUCCESS,] = GET_ARCHIVE_ACTION

const archive = reducerCreator(GET_ARCHIVE_ACTION)({
  [GET_ARCHIVE_SUCCESS]: (state, data) => {
    return {
      ...state,
      data
    }
  }
}, {
  data: []
})

export default combineReducers({
  archive
})