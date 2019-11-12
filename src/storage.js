const storage = {
  getString(key) {
    if (!key) return
    return localStorage.getItem(key)
  },

  setString(key, value) {
    if (!key) return
    localStorage.setItem(key, value)
    return {
      [key]: value
    }
  },

  getObject(key) {
    if (key) {
      let rawString = this.getString(key)
      return JSON.parse(rawString)
    } else {
      return false
    }
  },

  setObject(key, value) {
    if (key) {
      var parsedString = value

      if (typeof value === typeof {}) {
        parsedString = JSON.stringify(parsedString)
      }
      this.setString(key, parsedString)
      return {
        [key]: value
      }
    } else {
      return false
    }
  },

  remove(key) {
    if (!key) return
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  }
}

export default storage
