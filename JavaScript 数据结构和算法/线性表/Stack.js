// stack类
function Stack() {
    this.stack = []

    // 添加新元素到栈顶
    this.push = function(element) {
        this.stack.push(element)
    }

    // 移除栈顶元素，并返回被移除的元素
    this.pop = function() {
        return this.stack.pop()
    }

    // 查看栈顶元素
    this.peek = function() {
        return this.stack[this.stack.length-1]
    }

    // 判断是否为空栈
    this.isEmpty = function() {
        return this.stack.length === 0
    }

    // 清空栈
    this.clear = function() {
        this.stack = []
    }

    // 返回栈的长度
    this.size = function() {
        return this.stack.length
    }

    // 打印栈中的元素
    this.print = function() {
        console.log(this.stack.toString())
    }

}

// 创建一个stack实例
let stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.pop())
stack.push([5,8,4,3])
stack.print()

