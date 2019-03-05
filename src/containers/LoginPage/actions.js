import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    POST_FORGOT_PASSWORD,
    POST_FORGOT_PASSWORD_SUCCESS,
    POST_FORGOT_PASSWORD_ERROR,
    CLEAR_DATA,
  } from './constants'
  
  export const changeEmail = (email) => ({ type: CHANGE_EMAIL, email })
  
  export const changePassword = (password) => ({
    type: CHANGE_PASSWORD,
    password,
  })
  
  export const postForgotPassword = () => ({ type: POST_FORGOT_PASSWORD })
  
  export const postForgotPasswordSuccess = (success) => ({
    type: POST_FORGOT_PASSWORD_SUCCESS,
    success,
  })
  
  export const clearData = () => ({
    type: CLEAR_DATA,
  })
  
  export const postForgotPasswordError = (error) => ({
    type: POST_FORGOT_PASSWORD_ERROR,
    error,
  })
  