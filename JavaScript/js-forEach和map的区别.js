/**
 * 相同点：
 *  1. 都是用来遍历数组的
 *  2. 都不会修改原数组
 */


/**
 * 区别：map 分配内存空间存储新数组，并且返回；forEach 不会返回执行结果，返回 undefined
 */


// forEach
let arr_forEach = [0,1,2,3]
let newArr_forEach = arr_forEach.forEach((item)=>{

    item = item*2 // 这样不修改原数组的值

    // arr[index] = arr[index]*2 // 这样才会修改原数组的值

    return item // forEach 不会返回执行结果，只返回undefined
})
console.log(arr_forEach) // [ 0, 1, 2, 3 ]
console.log(newArr_forEach) // undefined



// map
let arr_map = [0,1,2,3]
let newArr_map = arr_map.map((item)=>{
 
    item = item*2 // 这样不修改原数组的值

    return item // map 返回执行结果
})
console.log(arr_map) // [ 0, 1, 2, 3 ]
console.log(newArr_map) // [ 0, 2, 4, 6 ]

