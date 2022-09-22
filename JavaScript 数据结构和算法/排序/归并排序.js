/**
 * 归并排序：
 *  采用了分治的思想，将一个大问题分解成许多小的子问题来解决。
 *  将数组拆分为左右两个子数组，然后再分别将两个子数组继续进行拆分，最后将排好序的子数组逐一进行合并。
 * 
 */

function mergeSort(arr) {
    let len = arr.length
    if(len < 2) return arr

    // 取数组的中间值
    let middle = Math.floor(len/2)
    // 将数组拆分为左右两个子数组
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    // 返回排序并合并后的数组
    return merge(mergeSort(left), mergeSort(right))
}

// 排序算法
function merge(left, right) {
    let newArr = []
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            newArr.push(left.shift())
        } else {
            newArr.push(right.shift())
        }
    }
    while(left.length) newArr.push(left.shift())
    while(right.length) newArr.push(right.shift())

    return newArr
}

let arr = [1,5,2,8,3,15,4,2,9,6]
console.log(mergeSort(arr))