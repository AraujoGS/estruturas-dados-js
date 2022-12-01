// Stack baseada em array
const StackArray = require('./stack-array')
const stackArray = new StackArray()
//verificando a stack vazia
console.log('StackArray', stackArray.isEmpty())
//inserindo valores na stack
stackArray.push(5)
stackArray.push(8)
stackArray.push(11)
//verificando que a stack já não está mais vazia
console.log('StackArray', stackArray.isEmpty())
//verificando a quantidade de elementos na stack
console.log('StackArray', stackArray.size())
//verificando qual elemento está no topo da stack, ou seja, o item a ser retornado caso seja solicitado uma saída da stack
console.log('StackArray', stackArray.peek())
//removendo um item da stack
const value = stackArray.pop()
console.log(value)
console.log('StackArray', stackArray.peek())
console.log('StackArray', stackArray.size())
//limpando a stack
stackArray.clear()
console.log('StackArray', stackArray.isEmpty())
console.log('StackArray', stackArray.peek())
console.log('StackArray', stackArray.size())
console.log('StackArray', stackArray.pop())

// Stack baseada em objeto
const StackObject = require('./stack')
const stackObject = new StackObject()
//verificando a stack vazia
console.log('StackObject', stackObject.isEmpty())
//inserindo valores na stack
stackObject.push(5)
stackObject.push(8)
stackObject.push(11)
//verificando que a stack já não está mais vazia
console.log('StackObject', stackObject.isEmpty())
//verificando a quantidade de elementos na stack
console.log('StackObject', stackObject.size())
//verificando qual elemento está no topo da stack, ou seja, o item a ser retornado caso seja solicitado uma saída da stack
console.log('StackObject', stackObject.peek())
//removendo um item da stack
const value2 = stackObject.pop()
console.log(value2)
console.log('StackObject', stackObject.peek())
console.log('StackObject', stackObject.size())
//limpando a stack
stackObject.clear()
console.log('StackObject', stackObject.isEmpty())
console.log('StackObject', stackObject.peek())
console.log('StackObject', stackObject.size())
console.log('StackObject', stackObject.pop())