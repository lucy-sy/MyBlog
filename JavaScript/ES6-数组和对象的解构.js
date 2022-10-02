// 数组
let [a,b,c] = [1,2,3]
console.log(a,b,c) // 1 2 3
let [m,,n] = [4,5,6]
console.log(m, n) // 4 6


// 对象
let obj = {
    name: '李华',
    age: 22,
    address: {
        a: '成都市'
    },
    grade: {
        math: 98,
        English: 90
    }
}
let {name, age, address, grade:{math}} = obj
console.log(name, age, address, math) // 李华 22 { a: '成都市' } 98
address.a = '龙泉驿区'
math = 92
console.log(obj.name, obj.age, obj.address, obj.grade.math) // 李华 22 { a: '龙泉驿区' } 98
console.log(name, age, address, math) // 李华 22 { a: '龙泉驿区' } 92