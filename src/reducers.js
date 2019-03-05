/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import history from './utils/history'
import globalReducer from './containers/App/reducer'
// import languageProviderReducer from './containers/LanguageProvider/reducer'
// import studentHomePageReducer from './containers/StudentHomePage/reducer'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default (injectedReducers = {}) =>
  combineReducers({
    router: connectRouter(history),
    global: globalReducer,
    // language: languageProviderReducer,
    // studentHomePage: studentHomePageReducer,
    ...injectedReducers,
  })
