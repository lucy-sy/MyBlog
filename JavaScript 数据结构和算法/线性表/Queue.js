export default function Queue() {
    this.queue = []

    // 向队列尾部添加元素
    this.enqueue = function(element) {
        this.queue.push(element)
    }

    // 移除队列的第一个元素，并返回被移除的元素
    this.dequeue = function() {
        return this.queue.shift()
    }

    // 获取队列的第一个元素
    this.front = function() {
        return this.queue[0]
    }

    // 判断队列是否为空
    this.isEmpty = function() {
        return this.queue.length === 0
    }

    // 清空队列
    this.clear = function() {
        this.queue = []
    }

    // 打印队列中的元素
    this.print = function() {
        console.log(this.queue.toString())
    }

    // 返回队列的长度
    this.size = function() {
        return this.queue.length
    }
}

// 创建一个实例
// let queue = new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(5)
// console.log(queue.size())
// console.log(queue.dequeue())
// console.log(queue.front())
// console.log(queue.print())
// queue.clear()
// console.log(queue.queue)
