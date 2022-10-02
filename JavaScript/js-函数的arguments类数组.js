// arguments 类数组：与数组相似，但是没有数组常见的方法属性。
// 如何遍历类数组
/******************* 1. length + for ***********************/
function fn1() {
    let result = ''
    for(let i=0; i<arguments.length; i++) {
        result += arguments[i]+' '
    }
    console.log(result)
}
fn1(1,2,3,4,5) // 1 2 3 4 5




/******** 2. 将数组的方法应用到类数组上，调用call，使用forEach ***********/
function fn2() {
    let result = ''
    Array.prototype.forEach.call(arguments, (item)=>{
        result += item+' '
    })
    console.log(result)
}
fn2(1,2,3,4,5) // 1 2 3 4 5




/******** 3. 使用Array.from()方法，将类数组转化为数组 ************************/
function fn3() {
    let result = ''
    let arr = Array.from(arguments)
    arr.forEach(item=>{
        result += item+' '
    })
    console.log(result)
}
fn3(1,2,3,4,5) // 1 2 3 4 5




/********* 4. 使用扩展运算符，将类数组转化为数组 ***********/
function fn4() {
    let result = ''
    let arr = [...arguments]
    arr.forEach(item=>{
        result += item+' '
    })
    console.log(result)
}
fn4(1,2,3,4,5) // 1 2 3 4 5