function quickSort(arr) {
    let len = arr.length
    if(len < 2) return arr

    // 查找基准数（最中间的数。以此为分界线，小于该数的放左边，大于该数的放右边）
    let middle = Math.floor(len/2)
    let middleData = arr.splice(middle, 1)

    let left = []
    let right = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] <= middleData) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    // 执行递归操作
    return quickSort(left).concat(middleData, quickSort(right))
}

let arr = [1,5,2,8,3,15,4,2,9,6]
console.log(quickSort(arr))