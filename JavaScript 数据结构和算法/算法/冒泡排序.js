function bubbleSort(arr) {
    let len = arr.length
    let flag = false
    for(let i=0; i<len; i++) {
        for(let j=0; j<len-i-1; j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                // 数组未排序
                flag = true
            }
        }
        if(!flag) return arr
    }
    return arr
}

let arr = [5,4,9,2,6]
console.log(bubbleSort(arr))