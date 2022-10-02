/*********************************** 对象 *******************************/
const obj = {
    name: '李华',
    age: 20,
    boy: true,
    leader: undefined,
    English: null,
    fn: function() {
        console.log(1111111)
    },
    arr: [80,90,88],
    obj_1: {
        a: 1,
        b: 2
    }
}
// 制造循环引用
obj.obj = obj



/******* Object.assign方法 **********************/
// let obj_assign = Object.assign({},obj)
// obj_assign.name = "张三"
// obj_assign.obj_1.a = 50
// obj_assign.arr[0] = 10
// console.log('obj_assign.name ',obj_assign.name) // 张三
// console.log('obj_assign.obj_1.a ',obj_assign.obj_1.a) // 50
// console.log('obj_assign.arr[0] ',obj_assign.arr[0]) // 10
// console.log('obj.name ',obj.name) // 李华
// console.log('obj.obj_1.a ',obj.obj_1.a) // 50
// console.log('obj.arr[0] ',obj.arr[0]) // 10




/*********** 扩展运算符  ************************/
// let obj_kz = {...obj}
// obj_kz.name = "语文"
// obj_kz.obj_1.a = 80
// obj_kz.arr[0] = 1050
// console.log('obj_kz.name ',obj_kz.name) // 语文
// console.log('obj_kz.obj_1.a ',obj_kz.obj_1.a) // 80
// console.log('obj_kz.arr[0] ',obj_kz.arr[0]) // 1050
// console.log('obj.name ',obj.name) // 李华
// console.log('obj.obj_1.a ',obj.obj_1.a) // 80
// console.log('obj.arr[0] ',obj.arr[0]) // 1050




/****** JSON方法（对象中出现循环引用直接报错）*******/
// delete obj.obj
//  let obj_JSON = JSON.parse(JSON.stringify(obj))
//  obj_JSON.name ="语文"
//  obj_JSON.obj_1.a = 50
//  obj_JSON.arr[0] = 10
// console.log('obj_JSON.name ',obj_JSON.name) // 语文
// console.log('obj_JSON.obj_1.a ',obj_JSON.obj_1.a) // 50
// console.log('obj_JSON.arr[0] ',obj_JSON.arr[0]) // 10
// console.log('obj_JSON.leader ',obj_JSON.leader) // undefined
// console.log('obj_JSON.fn ',obj_JSON.fn) // undefined
// console.log('obj.name ',obj.name) // 李华
// console.log('obj.obj_1.a ',obj.obj_1.a) // 50
// console.log('obj.arr[0] ',obj.arr[0]) // 10
// console.log('obj.leader ',obj.leader) // undefined
// console.log('obj.fn ',obj.fn) // [Function: fn]




/*********** 递归 ****************************/
/**
 * 深拷贝
 * obj 要拷贝的对象
 * map 用来存储循环引用对象的地址
 */
function myDeepCopy(obj, map = new Map()) {
    // 若是基本数据类型，直接返回obj
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }

    // 解决循环引用
    if(map.has(obj)) {
        return map.get(obj)
    }

    // 开辟新的内存空间，存储复制过来的复杂数据类型的值
    let newObj = (obj instanceof Array || Object.prototype.toString.call(obj) === '[object Array]') ? [] : {}
    // 防止循环引用
    map.set(obj, newObj)
    // 将对象中的数据挨个赋值
    for(let key in obj) {
        // 判断是否是私有属性
        if(obj.hasOwnProperty(key)) {
            newObj[key] = myDeepCopy(obj[key], map)
        }
    }
    return newObj
}

let newObj = myDeepCopy(obj)
console.log(newObj)