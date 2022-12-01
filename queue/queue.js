class Queue {
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
    return this.count
  }
  isEmpty () {
    return this.size() === 0
  }
  peek () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const element = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.count--
    this.lowestCount++
    return element
  }
  toString () {
    let queue = ""
    if (this.isEmpty()) {
      return queue
    }    
    for (const index in this.items) {
     const element = this.items[index]
     const content = queue.length === 0 ? element : `, ${element}`
     queue += `${content}` 
    }
    return queue
  }
}

module.exports = Queue