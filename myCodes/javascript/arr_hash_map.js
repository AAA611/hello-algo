/**
 * 基于数组实现 hashMap
 */

/**
 * hashMap 中存储的数据结构
 */
class Pair {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
}

class ArrayHashMap {
  #buckets; //私有属性，存储数据的数组
  constructor(capacity = 100) {
    this.capacity = new Array(capacity).fill(null)
  }

  /**
   * hash 函数
   * @param {*} key 
   * @returns 
   */
  #hashFunc(key) {
    return key % 100
  }

  /**
   * 获取
   * @param {*} key 
   * @returns 
   */
  get(key) {
    const index = this.#hashFunc(key)
    const pair = this.#buckets[index]
    if (pair === null) return null
    return pair.val
  }

  /**
   * 添加
   * @param {*} key 
   * @param {*} val 
   */
  set(key, val) {
    const index = this.#hashFunc(key)
    this.#buckets[index] = new Pair(key, val)
  }

  /**
   * 删除
   * @param {*} key 
   */
  delete(key) {
    const index = this.#hashFunc(key)
    this.#buckets[index] = null
  }

  /**
   * 所有 key
   * @returns 
   */
  keys() {
    return this.#buckets.map(pair => pair.key)
  }

  /**
   * 所有 value
   */
  values() {
    return this.#buckets.map(pair => pair.val)
  }
}