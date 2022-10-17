console.log(0 || 1) // 1 
console.log(false || '') // ''
console.log(false || 1) // 1
console.log('' || 'hello') // 'hello'
console.log(' ' || 8) // ' '
console.log(5 && 0) // 0
console.log('' && null) // ''
console.log(' ' && null) // null
console.log(' ' && false) // false
console.log(' ' && true) // true