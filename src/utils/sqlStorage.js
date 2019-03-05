import logger from './logger'

const getDb = () =>
  new Promise((resolve, reject) => {
    const db = window.sqlitePlugin.openDatabase(
      {
        name: 'apollo.db',
        location: 'default',
      },
      () =>
        db.executeSql(
          'CREATE TABLE IF NOT EXISTS keyValuePair (key,value)',
          [],
          () => resolve(db),
        ),
      (error) => {
        logger.error(error)
        reject()
      },
    )
  })

const sqlStorage = {
  async setItem(key, value) {
    const db = await getDb()

    db.executeSql(
      `SELECT key FROM keyValuePair WHERE key='${key}'`,
      [],
      (res) => {
        if (!res.rows.length) {
          db.executeSql(
            `INSERT INTO keyValuePair (key,value) VALUES ('${key}','${value}')`,
            [],
            () => {},
          )
        } else {
          db.executeSql(
            `UPDATE keyValuePair SET value='${value}' WHERE key='${key}'`,
            [],
            () => {},
          )
        }
      },
    )
  },

  async getItem(key) {
    const db = await getDb()

    return new Promise((resolve) =>
      db.executeSql(
        `SELECT value FROM keyValuePair WHERE key='${key}'`,
        [],
        (res) => {
          if (!res.rows.length) {
            resolve()
          } else {
            resolve(res.rows.item(0).value)
          }
        },
      ),
    )
  },

  async clear(callback) {
    const db = await getDb()
    db.executeSql('DROP TABLE IF EXISTS keyValuePair')
    callback()
  },
}

export default sqlStorage
