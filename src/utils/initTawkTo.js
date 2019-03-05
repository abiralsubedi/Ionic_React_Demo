const initTawkTo = (tawkToHash, visitor) => {
  window.Tawk_API = { visitor }
  window.Tawk_LoadStart = new Date()

  const firstScriptEl = document.querySelector('script')
  const tawkScriptEl = Object.assign(document.createElement('script'), {
    id: 'tawkToScript',
    async: true,
    src: `https://embed.tawk.to/${tawkToHash}/default`,
    charset: 'UTF-8',
  })

  tawkScriptEl.setAttribute('crossorigin', '*')
  firstScriptEl.parentNode.insertBefore(tawkScriptEl, firstScriptEl)
}

export default initTawkTo
