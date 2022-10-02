console.log(Number(0)) // 0
console.log(Number('')) // 0
console.log(Number(' ')) // 0
console.log(Number('aa')) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log('-----------------------isNaN()-----------------------')
console.log(isNaN(0)) // false
console.log(isNaN('')) // false
console.log(isNaN(' ')) // false
console.log(isNaN('aa')) // true
console.log(isNaN(true)) // false
console.log(isNaN(false)) // false
console.log(isNaN(null)) // false
console.log(isNaN(undefined)) // true
console.log(isNaN(NaN)) // true
console.log('-----------------------Number.isNaN()-----------------------')
console.log(Number.isNaN(0)) // false
console.log(Number.isNaN(1)) // false
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('')) // false
console.log(Number.isNaN(' ')) // false
console.log(Number.isNaN('aa')) // false
console.log(Number.isNaN(true)) // false
console.log(Number.isNaN(false)) // false
console.log(Number.isNaN(null)) // false
console.log(Number.isNaN(undefined)) // false









