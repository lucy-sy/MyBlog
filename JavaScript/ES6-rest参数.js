// ES中的rest参数：用来获取函数多余的参数。
// 形式：(...变量名)，把一个分离的参数序列组合成一个数组，值为数组
function fn(...rest) {
    let total = 0
    for(let value of rest) {
        total += value
    }
    console.log(total)
}

function fn1(a, ...rest) {
    let total = 0
    for(let value of rest) {
        total += value
    }
    console.log(total)
}

function fn2(a, b, ...rest) {
    let total = 0
    for(let value of rest) {
        total += value
    }
    console.log(total)
}


fn(1,2,3,4,5,6) // 21
fn1(1,2,3,4,5,6) // 20
fn2(1,2,3,4,5,6) // 18


