const Deque = require('./deque')
const deque = new Deque()
console.log(deque.isEmpty())
console.log(deque.size())
deque.addFront('Guilherme')
console.log(deque.isEmpty())
console.log(deque.toString())
deque.addFront('Poliane')
deque.addFront('Ilza')
deque.addBack('Nick')
console.log(deque.toString())

console.log(deque.size())
console.log(deque.removeFront())
console.log(deque.toString())
console.log(deque.removeBack())
console.log(deque.toString())
console.log(deque.size())
console.log(deque.removeBack())
console.log(deque.toString())
deque.addBack('Severino')
deque.addBack('Guilherme')
console.log(deque.removeFront())
deque.addFront('Ilza')
console.log(deque.toString())
console.log(deque.removeBack())
console.log(deque.toString())