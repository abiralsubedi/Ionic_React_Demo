import { createSelector } from 'reselect'

const selectGlobal = (state) => state.get('global')

const selectRoute = (state) => state.get('route')

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('loading'),
  )

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('error'),
  )

const makeSelectToken = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('token'),
  )

const makeSelectRole = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('role'),
  )

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('isAuthenticated'),
  )

const makeSelectProfileInfo = () =>
  createSelector(
    selectGlobal,
    (globalState) => {
      const profile = globalState.get('profile')
      return profile && profile.toJS ? profile.toJS() : profile
    },
  )

const makeSelectLocation = () =>
  createSelector(
    selectRoute,
    (routeState) => {
      const location = routeState.get('location')
      return location && location.toJS ? location.toJS() : location
    },
  )

const makeSelectCountryList = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('countries'),
  )

const makeSelectTitle = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.get('title'),
  )

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectToken,
  makeSelectRole,
  makeSelectIsAuthenticated,
  makeSelectLocation,
  makeSelectProfileInfo,
  makeSelectCountryList,
  makeSelectTitle,
}
