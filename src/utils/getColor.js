import ColorHash from 'color-hash'

const colorHash = new ColorHash()

const getColor = (str) => {
  if (/igcse physics/.test(String(str).toLowerCase())) return '#0088FE'
  if (/business studies/.test(String(str).toLowerCase())) return '#FF8042'

  return colorHash.hex(str)
}

export default getColor
