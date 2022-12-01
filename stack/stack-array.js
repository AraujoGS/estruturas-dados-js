class Stack {
  constructor () {
    this.itens = []
  }

  push (item) {
    this.itens.push(item)
  }

  pop () {
    return this.itens.pop()
  }

  peek () {
    return this.itens[this.itens.length - 1]
  }

  size () {
    return this.itens.length
  }

  isEmpty () {
    return Boolean(this.itens.length)
  }

  clear () {
    this.itens = []
  }
}

module.exports = Stack