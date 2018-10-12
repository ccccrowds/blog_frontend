import { actionCreator } from '@/common/redux.js'
import { get } from '@/common/fetch'

export const GET_ARCHIVE_ACTION = actionCreator('get archive list')

export const getArchiveList = () => ({
  callAPI: () => get('/api/article/archive'),
  types: GET_ARCHIVE_ACTION,
  handleResult: res => res.data
})
