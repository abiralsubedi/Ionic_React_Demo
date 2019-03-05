import { fromJS } from 'immutable'

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
  GET_COUNTRY_LIST,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COUNTRY_LIST_ERROR,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  SET_TITLE,
} from './constants'

const initialState = fromJS({
  loading: false,
  error: false,
  token: false,
  isAuthenticated: false,
  profile: false,
  role: false,
  countries: false,
  expirationTime: false,
  title: 'Home',
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('token', false)
        .set('user', false)
        .set('isAuthenticated', false)
        .set('error', false)

    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('isAuthenticated', true)
        .set('token', action.token)
        .set('role', action.role)
        .set('expirationTime', action.expirationTime)
        .set('error', false)

    case LOGIN_ERROR:
      return state.set('error', action.error).set('loading', false)

    case LOG_OUT:
      return state
        .set('loading', false)
        .set('isAuthenticated', false)
        .set('token', false)
        .set('role', false)
        .set('profile', false)
        .set('error', false)
        .set('countries', false)

    case GET_PROFILE:
      return state.set('loading', true)

    case GET_PROFILE_SUCCESS:
      return state.set('profile', action.profile)

    case GET_PROFILE_ERROR:
      return state.set('error', action.error)

    case GET_COUNTRY_LIST:
      return state.set('countries', false)

    case GET_COUNTRY_LIST_SUCCESS:
      return state.set('countries', action.data)

    case GET_COUNTRY_LIST_ERROR:
      return state.set('error', action.error)

    case SET_TITLE:
      return state.set('title', action.title)

    default:
      return state
  }
}

export default appReducer
