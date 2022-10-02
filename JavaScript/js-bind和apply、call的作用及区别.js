/**
 * 作用：改变函数运行时的 this 指向
 */
var name = '张三'
var obj = {
    name: '李四',
    say: function() {
        console.log(this.name)
    }
}

obj.say() // 李四
// 在 setTimeout 里面执行的函数的 this 指向的是当前的全局对象（window）
setTimeout(obj.say, 0) // 在浏览器中显示 "张三"，在终端显示 "undefined"
setTimeout(obj.say.bind(obj), 0) // 李四


/**
 * 区别：
 *  apply：两个参数。第一个是this指向；第二个是函数接收的参数，以数组的形式传入。
 *  call：多个参数。第一个是this指向；从第二个开始逐一传参，一一对应。
 *      call和apply改变this指向原函数立即执行，临时改变this指向一次。
 * 
 *  bind：多个参数。第一个是this指向；从第二个开始逐一传参，一一对应。
 *      改变this指向不会立即执行，返回一个永久改变this指向的函数
 */
function fun(...args) {
    console.log(this)
    console.log(...args)
}
var person = {
    myName: '王五'
}
console.log('----------------------------- apply ---------------------------')
fun.apply(person, [1,2,3,4]) // { myName: '王五' } 1 2 3 4
fun(1,2,3,4) // Object [global] 1 2 3 4
console.log('----------------------------- call ---------------------------')
fun.call(person, 1,2,3,4) // { myName: '王五' } 1 2 3 4 
fun(1,2,3,4) // Object [global] 1 2 3 4
console.log('----------------------------- bind ---------------------------')
var bindFun1 = fun.bind(person) 
bindFun1(1,2,3,4) // { myName: '王五' } 1 2 3 4
var bindFun2 = fun.bind(person, 1,2,3,4)
bindFun2() // { myName: '王五' } 1 2 3 4