import { createAction, createReducer } from 'redux-act'

const noop = e => e

export const reducerCreator = actionTypes => (reducer, initialData) => {
  const initialState = {
    ...initialData,
    loading: false,
    error: null
  }
  const [ START, SUCCESS, FAILED ] = actionTypes
  const baseStart = reducer[START] || noop
  const baseSuccess = reducer[SUCCESS] || noop
  const baseFailed = reducer[FAILED] || noop
  return createReducer({
    [START]: (state, payload) => {
      return baseStart({
        ...state,
        loading: true,
        error: null
      }, payload)
    },
    [SUCCESS]: (state, payload) => {
      return baseSuccess({
        ...state,
        loading: false
      }, payload)
    },
    [FAILED]: (state, payload) => {
      return baseFailed({
        ...state,
        loading: false,
        error: payload
      }, payload)
    }
  }, initialState)
}

export const actionCreator = desc => [
  createAction(desc),
  createAction(desc + 'success'),
  createAction(desc + 'failed')
]

/**
 * action {
 *   callAPI: () => post('/api/get', {}),
 *   types: [ FETCH, FETCH_SUCCESS, FETCH_FAILED ],
 *   handleResult: result => result.data
 * }
 */
const applyFetchMiddleware = (
  handleResponse = val => val,
  handleErrorTotal = error => error
) =>
  store => next => action => {
    if (!Array.isArray(action.types)) {
      return next(action)
    }
    const {
      callAPI = noop,
      handleResult = val => val,
      handleError = error => error,
      types,
    } = action
    const [ START, SUCCESS, FAILED ] = types
    next(START(action))
    return callAPI().then(res => res.json())
      .then(ret => {
        console.log(SUCCESS(handleResponse(ret)))
        return next(SUCCESS(handleResult ? handleResult(ret) : handleResponse(ret)))
      })
      .catch(error => {
        return next(FAILED(handleError ? handleError(error) : handleErrorTotal(error)))
      })
  }

export default applyFetchMiddleware