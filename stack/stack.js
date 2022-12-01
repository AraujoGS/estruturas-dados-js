class Stack {
  constructor () {
    this.itens = {}
    this.count = 0
  }

  push (item) {
    this.itens[this.count] = item
    this.count++
  }

  pop () {
    if (this.count === 0) {
      return undefined
    }
    this.count--
    const item = this.itens[this.count]
    delete this.itens[this.count]
    return item
  }

  peek () {
    if (this.count === 0) {
      return undefined
    }
    const item = this.itens[this.count - 1]    
    return item
  }

  size () {
    return this.count
  }

  isEmpty () {
    return Boolean(this.count)
  }

  clear () {
    this.itens = {}
    this.count = 0    
  }

}

module.exports = Stack