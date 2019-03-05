import request from '../../utils/request'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../App/constants'
import {
  loginSuccess,
  loginError,
  getProfileSuccess,
  getProfileError,
  getCountryListSuccess,
  getCountryListError,
} from '../App/actions'
import decode from 'jwt-decode'
import { makeSelectEmail, makeSelectPassword } from './selectors'
import { makeSelectToken, makeSelectRole } from '../App/selectors'
import { POST_FORGOT_PASSWORD } from './constants'
import { postForgotPasswordSuccess, clearData } from './actions'

export function* postLogin() {
  const email = yield select(makeSelectEmail())
  const password = yield select(makeSelectPassword())
  const tenancyName = 'Default'

  try {
    const res = yield call(request, '/TokenAuth/Authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userNameOrEmailAddress: email,
        password,
        tenancyName,
        rememberClient: true,
      }),
    })
    const token = res.result.accessToken
    const roleUrl =
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    const role = decode(token)[roleUrl]
    const expirationTime = res.result.expireInSeconds

    if (role !== 'Student') throw new Error('Only student are allowed to login')

    yield put(loginSuccess(token, role, expirationTime))
    yield put(clearData())

    yield call(getProfile)

    if (role === 'Admin') yield call(getCountryList)

    yield put(window.location.replace('/'))
  } catch ({ message }) {
    yield put(loginError(message))
  }
}

export function* getProfile() {
  try {
    const token = yield select(makeSelectToken())
    const role = yield select(makeSelectRole())
    let profileEndpoint = '/profile'
    switch (role) {
      case 'Admin':
        profileEndpoint = '/adminProfile'
        break
      case 'Teacher':
        profileEndpoint = '/teacherProfile'
        break
      case 'Aptutor':
        profileEndpoint = '/aptutorProfile'
        break
      default:
        profileEndpoint = '/studentProfile'
    }

    const { result } = yield call(request, profileEndpoint, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })

    yield put(getProfileSuccess(result))
  } catch ({ message }) {
    yield put(getProfileError(message))
  }
}

export function* getCountryList() {
  try {
    const token = yield select(makeSelectToken())
    const response = yield call(request, '/countryDropdownlist', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    })
    yield put(getCountryListSuccess(response.result))
  } catch ({ message }) {
    yield put(getCountryListError(message))
  }
}

export function* postForgotPassword() {
  const message = 'Please check your inbox for password reset link'
  try {
    const email = yield select(makeSelectEmail())
    yield call(request, '/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    yield put(postForgotPasswordSuccess(message))
  } catch (error) {
    yield put(postForgotPasswordSuccess(message))
  }
}

export default function* authToken() {
  yield takeLatest(LOGIN, postLogin)
  yield takeLatest(POST_FORGOT_PASSWORD, postForgotPassword)
}
