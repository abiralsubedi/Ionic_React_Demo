import { fromJS } from 'immutable'
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  POST_FORGOT_PASSWORD,
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_ERROR,
  CLEAR_DATA,
} from './constants'

export const initialState = fromJS({
  email: '',
  password: '',
  error: '',
  success: '',
})

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email)
    case CHANGE_PASSWORD:
      return state.set('password', action.password)
    case CLEAR_DATA:
      return state.set('success', false)

    case POST_FORGOT_PASSWORD:
      return state.set('error', false).set('success', false)
    case POST_FORGOT_PASSWORD_SUCCESS:
      return state.set('error', false).set('success', action.success)
    case POST_FORGOT_PASSWORD_ERROR:
      return state.set('success', false).set('error', action.error)
    default:
      return state
  }
}

export default loginPageReducer
