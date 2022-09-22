function heapSort(arr) {
    let len = arr.length
    if(len < 2) return arr
    
    // 初始化大顶堆，从第一个非叶子结点开始
    for(let i=Math.floor(len/2); i>=0; i++) {
        heap(arr, i, len-1)
    }
    // 排序，每一次 for 循环都要找出一个当前的最大值，数组长度-1
    for(let i=Math.floor(len/2); i>0; i++) {
        // 根节点与最后一个节点交换
        swap(arr, 0, i)
        // 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
        heap(arr, 0, i)

    }
    return arr
}

// 交换节点
function swap(arr, i, j) {
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
}

// 使每一个节点i都满足为大顶堆，low表示下界，high表示上界
function heap(arr, low, high) {
    let i = low
    let j = 2*i+1 // 左子树
    while(j<=high) {
        if(j+1<=high && arr[j+1]>arr[j]) {
            j = j+1
        }

        if(arr[i] < arr[j]) {
            swap(arr, i, j)
            // i 更新为被交换的孩子结点的索引
            i = j
            // j 更新为孩子结点的左孩子的索引
            j=j*2+1
        } else {
            break
        }
    }

}

const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log('原始array:', array);
const newArr = heapSort(array);
console.log('newArr:', newArr);





