class Deque {
  constructor () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  clear () {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  size () {
    return this.count - this.lowestCount
  }
  isEmpty () {
    return this.size() === 0
  }
  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
      return
    }
    if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
      return
    }
    for (let index = this.count; index > this.lowestCount; index--) {
      this.items[index] = this.items[index - 1]
    }
    this.items[this.lowestCount] = element
    this.count++
  }
  addBack (element) {
    this.items[this.count] = element
    this.count++
  }
  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const element = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return element
  }
  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const element = this.items[this.count]
    delete this.items[this.count]
    return element
  }
  peekFront () {
    return this.items[this.lowestCount]
  }
  peekBack () {
    return this.items[this.count - 1]
  }
  toString () {
    let deque = ""
    if (this.isEmpty()) {
      return deque
    }    
    for (const index in this.items) {
     const element = this.items[index]
     const content = deque.length === 0 ? element : `, ${element}`
     deque += `${content}` 
    }
    return deque
  }
}

module.exports = Deque