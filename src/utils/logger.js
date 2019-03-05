// import * as Sentry from '@sentry/browser'

const logger = {
  log(message) {
    console.log(message)
  },
  error(error) {
    // Sentry.captureException(error)
    console.error(error)
  },
}

export default logger
