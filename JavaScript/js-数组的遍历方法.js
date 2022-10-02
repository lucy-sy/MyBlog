let arr = [1,2,3,4,5]
let result = ''
let res

console.log('************** 1. forEach **********************')
res = arr.forEach(item=>{
    result += item +' '
    return item*2
})
console.log(result) // 1 2 3 4 5
console.log(res) // undefined



console.log('************** 2. map **********************')
result = ''
res = arr.map(item=>{
    result += item +' '
    return item*2
})
console.log(result) // 1 2 3 4 5
console.log(res) // [ 2, 4, 6, 8, 10 ]



console.log('************** 3. filter **********************')
result = ''
res = arr.filter(item=>{
    result += item +' '
    return item>3
})
console.log(result) // 1 2 3 4 5
console.log(res) // [ 4, 5 ]



console.log('************** 4. for...of **********************')
result = ''
for (let item of arr) {
    result += item +' '
}
console.log(result) // 1 2 3 4 5




console.log('************** 5. reduce **********************')
result = ''
res = arr.reduce((pre, item)=>{
    result += item +' '
    return pre+item
}, 0)
console.log(result) // 1 2 3 4 5
console.log(res) // 15