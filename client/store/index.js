import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createFetchMiddleware from '@/common/redux'
import reducer from '../reducer'

const reduxFetch = createFetchMiddleware(
  res => res,
  error => error
)

const middleWare = [thunk, reduxFetch]

export default function (initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleWare)
  )

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer')

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}