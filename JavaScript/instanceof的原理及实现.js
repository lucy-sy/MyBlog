class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let stu1 = new Student('李华', 20)
console.log(stu1 instanceof Student)

// 原理：本质就是查找实例的原型链上是否有该类型的原型对象
function instanceof_self(left, right) {
    while(true) {
        if(left.__proto__ === null) {
            return false
        }

        // 实例的原型链 等于 构造函数的原型对象，则返回true
        if(left.__proto__ === right.prototype) {
            return true
        }
        left = left.__proto__
    }
}
console.log(instanceof_self(stu1, Student))