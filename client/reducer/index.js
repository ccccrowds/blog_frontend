import { combineReducers } from 'redux'
import posts from '../routes/Posts/reducers'
import postsDetail from '../routes/Detail/reducers'

export default combineReducers({
  posts,
  postsDetail
})