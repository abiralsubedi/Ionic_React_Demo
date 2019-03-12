import { clearState } from '../../utils/localStorage'
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

export const login = (email,  password) => ({ type: LOGIN, email, password })

export const loginSuccess = (token, role, expirationTime) => ({
  type: LOGIN_SUCCESS,
  token,
  role,
  expirationTime,
})

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  error,
})

export const logOut = () => {
  clearState().then(() => {
    window.location.hash = '#/login'
  })

  return { type: LOG_OUT }
}

export const getCountryList = () => ({ type: GET_COUNTRY_LIST })

export const getCountryListSuccess = (data) => ({
  type: GET_COUNTRY_LIST_SUCCESS,
  data,
})

export const getCountryListError = (error) => ({
  type: GET_COUNTRY_LIST_ERROR,
  error,
})

export const getProfile = () => ({
  type: GET_PROFILE,
})

export const getProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  profile,
})

export const getProfileError = (error) => ({ type: GET_PROFILE_ERROR, error })

export const setTitle = (title) => ({ type: SET_TITLE, title })
