import Fuse from 'fuse.js'

const filter = (query, content, keys) => {
  const fuse = new Fuse(content, {
    keys,
    threshold: 0.3,
    shouldSort: true,
    maxPatternLength: 32,
    minMatchCharLength: 2,
  })

  return fuse.search(query)
}

export default filter
