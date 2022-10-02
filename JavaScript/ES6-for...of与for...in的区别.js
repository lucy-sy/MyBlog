function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
Person.prototype.nationality = 'china'
let p = new Person('李华', 20, '男')
// 让 p对象 含有iterator接口，便于使用 for...of
p[Symbol.iterator] = function() {
    let keys = Object.keys(p)
    let index = 0
    return {
        next() {
            if(index < keys.length){
                return {value: p[keys[index++]], done: false}
            } else{
                return {value: undefined, done: true}
            }
        }
    }
}

let result = ''

/*************** 1. for...of遍历获取键值且只遍历当前对象，for...in遍历获取键名且会遍历对象的整个原型链 ***********/
for (let value of p) {
    result += value + ' '
}
console.log('for...of: ', result) // for...of:  李华 20 男

result = ''
for (let key in p) {
    result += key + ' '
}
console.log('for...in: ', result) // for...in:  name age sex nationality



/*********** 2. 对于数组的遍历，for...of返回数组下标对应的属性值，for...in返回数组中所有可枚举的属性 ***********/
let arr = [1,2,3,4]
result = ''
for (let value of arr) {
    result += value + ' '
}
console.log('for...of: ', result) // for...of:  1 2 3 4

result = ''
for(let key in arr) {
    result += key + ' '
}
console.log('for...in: ', result) // for...in:  0 1 2 3