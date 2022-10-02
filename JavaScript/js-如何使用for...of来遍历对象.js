// for...of 允许遍历一个含有 iterator 接口的数据结构（数组或对象）并返回各项的值。

/********** 1. 需要遍历的对象是一个类数组，先通过 Array.from() 转化为数组，再遍历 *******/
let args = {
    0:1,
    1:2,
    2:3,
    length: 3
}
args = Array.from(args)
let result1 = ''
for(let value of args){
    result1 += value+' '
}
console.log(result1) // 1 2 3


/********** 1. 需要遍历的对象不是类数组或数组，先给对象添加一个 Symbol.iterator属性，指向迭代器，再遍历 *******/
/**
 * iterator 遍历过程
 *  1. 创建一个指针对象，指向当前数据结构的起始位置。
 *  2. 第一次调用指针对象的 `next` 方法，可以将指针指向数据结构的第一个成员。
 *  3. 第二次调用指针对象的 `next` 方法，可以将指针指向数据结构的第二个成员。
 *  4. 不断调用指针对象的 `next` 方法，直到它指向数据结构的结束位置。
 * 每一次调用 `next` 方法，都会返回数据结构的当前成员的信息，返回一个包含 `value` 和 `done` 两个属性的对象。
 *  - `value`：当前成员的值
 *  - `done`：是一个布尔值，表示遍历是否结束
 */
let obj = {
    name: '李华',
    age: 23,
    grade: 'first'
}
obj[Symbol.iterator] = function() {
     // 拿到对象中所有的key值
     let keys = Object.keys(obj)
     // 指向当前位置的指针
     let index = 0
    return {
        next() {
            if(index < keys.length) {
                return {value: obj[keys[index++]], done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}

let result2 = ''
for (let value of obj) {
    result2 += value + ' '
}
console.log(result2) // 李华 23 first 

