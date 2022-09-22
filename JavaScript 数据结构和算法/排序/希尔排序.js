function shellSort(arr) {
    let len = arr.length
    if(len < 2) return arr

    // 围绕步长进行循环，第一步步长为数组长度的1/2，最后步长为1
    for(let shellWidth=Math.floor(len/2); shellWidth>=1; shellWidth=Math.floor(shellWidth/2)) {
        // 从步长长度的那组数组开始进行插入排序
        for(let i=shellWidth; i<len; i++) {
            // 同组内元素间进行插入排序
            let j = i-shellWidth // 同组内的元素，从后往前逐一进行比较
            while(j>=0 && arr[j]>arr[i]) {
                swap(arr, i, j)
                i = j
                j = j - shellWidth
            }

        }
    }
    
    return arr
}

// 不增加变量，交换数据
function swap(arr, i, j) {
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
    return arr
}


// 测试
const array = [35, 33, 42, 10, 14, 19, 27, 44];
console.log('原始array:', array);
shellSort(array)
console.log('newArr:', array);
