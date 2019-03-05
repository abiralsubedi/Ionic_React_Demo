export const isAndroid = () =>
  window.cordova && window.cordova.platformId === 'android'

export const isIos = () => window.cordova && window.cordova.platformId === 'ios'
