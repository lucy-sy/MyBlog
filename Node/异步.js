function sum(a, b, cb) {
    setTimeout(()=>{
        cb(a+b)
    }, 5000)
}

let a
console.log(111111)
sum(123, 456, (result)=>{
    a = result
})
console.log(2222222)