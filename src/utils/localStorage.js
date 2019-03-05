import logger from './logger'
import sqlStorage from './sqlStorage'

const errorHandler = (error) => error.exception && logger.error(error.exception)
export const loadState = () =>
  new Promise(async (resolve) => {
    try {
      let serializedState

      if (window.cordova) {
        serializedState = await sqlStorage.getItem('state')
      } else {
        serializedState = localStorage.getItem('state')
      }

      resolve(serializedState ? JSON.parse(serializedState) : undefined)
    } catch (error) {
      resolve()
      errorHandler(error)
    }
  })

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    if (window.cordova) {
      sqlStorage.setItem('state', serializedState)
    } else {
      localStorage.setItem('state', serializedState)
    }
  } catch (error) {
    // JSON error
  }
}

export const clearState = () =>
  new Promise((resolve) => {
    if (window.cordova) {
      sqlStorage.clear(resolve)
    } else {
      localStorage.clear()
      resolve()
    }
  })
