/**
 * 思路：
 *  1、清空字符串中的所有空格（通过split和join进行），赋值为新字符串
 *  2、求新字符串的长度：
        如果长度为0，则直接返回true
        如果长度为奇数，或者字符串以 )、]、} 开头，则字符串肯定不满足条件，直接返回false
 *  3、遍历新字符串，此时需要使用临时栈存放左括号
        如果出现左括号，则压入临时栈中；
        如果出现右括号，则将右括号与栈顶元素进行匹配
            如果匹配成功，栈顶元素弹出，进入下一轮匹配：
                如果字符串遍历完，临时栈为空栈，则返回true
                如果临时栈不为空栈，则返回false
            如果匹配不成功，则直接返回false
 */

var isValid = function(s) {
    let newStr = s.split(" ").join("") // 清空字符串中的所有空格
    let len = newStr.length // 字符串长度
    let mapRight = [")", "]", "}"]
    let mapLeft = ["(", "[", "{"]
    let map = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    let stack = [] // 临时栈
    
    // 若字符串长度为0，则返回true
    if(len == 0) return true
    // 若字符串长度为奇数，或者字符串以 )、]、} 开头，则返回false
    if(len%2 !== 0 || mapRight.includes(newStr[0]) === true) return false

    for(let i=0; i<len; i++) {
        if(mapLeft.includes(newStr[i])) {
            stack.push(newStr[i])
        } else {
            if(map[newStr[i]] === stack[stack.length-1]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    if(stack.length === 0) return true
    return false
}
            
// 测试
console.log(isValid("{[]}"))