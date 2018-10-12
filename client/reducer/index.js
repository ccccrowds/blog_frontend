import { combineReducers } from 'redux'
import posts from '../routes/Posts/reducers'
import tags from '../routes/Tags/reducers'
import postsDetail from '../routes/Detail/reducers'
import archive from '../routes/Archives/reducers'

export default combineReducers({
  posts,
  tags,
  postsDetail,
  archive
})