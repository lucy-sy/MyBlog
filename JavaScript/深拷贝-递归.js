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

const obj = {
    name: '李华',
    age: 20,
    boy: true,
    leader: undefined,
    English: null,
    fn: function() {
        return 5
    },
    grade: [80,90,88],
}
obj.obj = obj
let newObj = myDeepCopy(obj)
console.log(newObj)