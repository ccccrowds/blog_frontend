import { createAction } from 'redux-act'

export const startGetPostsList = createAction(item => item)
export const getPostsListSuccess = createAction()
export const getPostsList = createAction()
