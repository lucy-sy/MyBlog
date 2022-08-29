var simplifyPath = function(path) {
    /**
     *思路：
     * 1、将字符串path通过'/'切割为数组，并过滤掉空格（当两个目录名之间存在多个斜杠 '/'时，切割时会产生空格元素）和'.'（'.'表示当前目录本身）
     * 2、用临时栈来保存数组中的元。如果元素不为'..'，则压入栈中；如果元素为'..'（'..'表示上一级目录），则移除栈顶元素
     * 3、用连接符将栈中的元素连接起来，即简化后的规范路径
     */

    // 切割path并过滤掉不符合的元素
    let arr = path.split('/').filter((value) => {
        if(value && value !== '.') {
            return value
        }
    })

    // 临时栈
    let stack = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== '..') {
            stack.push(arr[i])
        } else {
            stack.pop()
        }
    }
    return `/${stack.join('/')}`
};

console.log(simplifyPath("/home/"))