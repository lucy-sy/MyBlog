// 对象冻结
function constTize(obj) {
    // 判断对象是否已经冻结
    if(Object.isFrozen(obj)) {
        return obj
    }

    // 若未冻结，遍历对象内部进行深度冻结。
    Object.keys(obj).forEach(key => {
        // 深度冻结
        if(typeof obj[key] === 'object') {
            obj[key] =  constTize(obj[key])
        }
    })

    // Object.freeze()：冻结对象函数
    return Object.freeze(obj)
}

const obj = {
    name: '李华',
    age: 20,
    arr: [90,80,76]
}

const newObj = constTize(obj)
obj.arr = [1,2,6]
newObj.name = '张三'
console.log('obj: ', obj) // obj:  { name: '李华', age: 20, arr: [ 90, 80, 76 ] }
console.log('newObj: ', newObj) // newObj:  { name: '李华', age: 20, arr: [ 90, 80, 76 ] }
console.log(obj == newObj) // true
console.log(obj === newObj) // true