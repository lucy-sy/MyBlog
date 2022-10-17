// new 方法的实现
function myNew(obj) {
    // 创建一个空对象
    let newObj = new Object()
    // 将空对象的__proto__ 指向 构造函数的prototype
    newObj.__proto__ = obj.prototype
    // 将构造函数的this 指向 空对象
    let res = obj.apply(newObj, [...arguments].slice(1))
    return typeof res === 'object' ? res : obj
}

let obj1 = new Object()
let obj2 = myNew(Object)
console.log(obj1.__proto__ === Object.prototype) // true
console.log(obj2.__proto__ === Object.prototype) // true




