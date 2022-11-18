function chooseSort(arr) {
    let len = arr.length
    // 标记最小值
    let temp
    for(let i=0; i<len; i++) {
        temp = i
        for(let j=i; j<len; j++) {
            if(arr[temp]>arr[j]) {
                temp = j
            }
        }
        if(temp !== i) {
            [arr[temp], arr[i]] = [arr[i], arr[temp]]
        }
    }
    return arr
}

let arr = [5,4,9,2,6]
console.log(chooseSort(arr))