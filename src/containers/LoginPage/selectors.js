import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectLogin = (state) => state.get('loginpage', initialState)

const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    (loginState) => loginState.get('email'),
  )

const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    (loginState) => loginState.get('password'),
  )
const makeSelectError = () =>
  createSelector(
    selectLogin,
    (loginState) => loginState.get('error'),
  )

const makeSelectSuccess = () =>
  createSelector(
    selectLogin,
    (loginState) => loginState.get('success'),
  )

export {
  selectLogin,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectError,
  makeSelectSuccess,
}