export default {
  // 存储
  setItem(key, val) {
    if (typeof val === 'object') {
      val = JSON.stringify(val)
    }
    localStorage.setItem(key, val)
  },
  // 取出
  getItem(key) {
    const data = localStorage.getItem(key)
    try {
      return JSON.parse(data)
    } catch (error) {
      return data
    }
  },
  // 删除
  delItem(key) {
    localStorage.removeItem(key)
  }
}
