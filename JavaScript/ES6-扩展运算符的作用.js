/****************** 复制 **********************/
// 数组
// let arr1 = [1, 5, 10, {name: '张三'}]
// let arr2 = [...arr1]
// arr2[1] = 50
// arr2[3].name = '李四'
// console.log('arr1: ', arr1) // arr1:  [ 1, 5, 10, { name: '李四' } ]
// console.log('arr2: ', arr2) // arr2:  [ 1, 50, 10, { name: '李四' } ]

// // 对象
// let obj1 = {
//     name: '李华',
//     age: 21,
//     grade: [80, 95, 86]
// }
// let obj2 = {...obj1}
// obj2.name = '李四'
// obj2.grade[2] = 100
// console.log('obj1: ', obj1) // obj1:  { name: '李华', age: 21, grade: [ 80, 95, 100 ] }
// console.log('obj2: ', obj2) // obj2:  { name: '李四', age: 21, grade: [ 80, 95, 100 ] }




/****************** 合并 **********************/
// 数组
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [...arr1, ...arr2]
// console.log('arr1: ', arr1) // arr1:  [ 1, 2, 3 ]
// console.log('arr2: ', arr2) // arr2:  [ 4, 5, 6 ]
// console.log('arr3: ', arr3) // arr3:  [ 1, 2, 3, 4, 5, 6 ]

// // 对象
// let obj1 = {
//     name: '张三',
//     age: 20,
//     sex: '男'
// }
// let obj2 = {
//     name: '李四',
//     age: 22,
//     grade: 10
// }
// let obj3 = {...obj1, ...obj2}
// console.log('obj1: ', obj1) // obj1:  { name: '张三', age: 20, sex: '男' }
// console.log('obj2: ', obj2) // obj2:  { name: '李四', age: 22, grade: 10 }
// console.log('obj3: ', obj3) // obj3:  { name: '李四', age: 22, sex: '男', grade: 10 }





/****************** 字符串转为数组 **********************/
let str = 'hello'
let arr = [...str]
console.log(arr) // [ 'h', 'e', 'l', 'l', 'o' ]