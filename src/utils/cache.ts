class Cache {
  storage: Storage

  constructor (isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setCache (key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache (key: string) {
    const value = this.storage.getItem(key)

    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache (key: string) {
    this.storage.removeItem(key)
  }

  clearCache () {
    this.storage.clear()
  }
}

const localCache = new Cache()
const sessionCache = new Cache(false)

export { localCache, sessionCache }
