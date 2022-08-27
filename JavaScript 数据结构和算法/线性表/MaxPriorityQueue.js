function MaxPriorityQueue() {
    this.queue = []

    // 按最大优先级向队列中添加元素
    this.enqueue = function(element, priority) {
        let queueElemet = {
            element: element,
            priority: priority
        }

        if(this.queue.length == 0) {
            this.queue.push(queueElemet)
        }
        else {
            let flag = false
            for(let i=0; i<this.queue.length; i++) {
                if(this.queue[i].priority < priority) {
                    this.queue.splice(i, 0, queueElemet)
                    flag = true
                    break
                }
            }
            if(!flag) this.queue.push(queueElemet)
        }
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

    // 返回队列的长度
    this.size = function() {
        return this.queue.length
    }

    // 打印元素  maxPriorityQueue
    this.print = function() {
        let newArr = []
        for(let i=0; i<this.size(); i++) {
            newArr.push(`${this.queue[i].element}->${this.queue[i].priority}`)
        }
        console.log(newArr.toString())
    }
}

// 创建最大优先队列  maxPriorityQueue实例
var maxPriorityQueue = new MaxPriorityQueue();

console.log(  maxPriorityQueue.isEmpty());     // true
maxPriorityQueue.enqueue("John", 1);         // undefined
maxPriorityQueue.enqueue("Jack", 3);         // undefined
maxPriorityQueue.enqueue("Camila", 2);       // undefined
maxPriorityQueue.enqueue("Tom", 3);          // undefined
maxPriorityQueue.print();                    // "John->1,Camila->2,Jack->3,Tom->3"
console.log(  maxPriorityQueue.size());        // 4
console.log(  maxPriorityQueue.isEmpty());     // false
console.log(  maxPriorityQueue.dequeue());     // {element: "John", priority: 1}                // {element: "Camila", priority: 2}
maxPriorityQueue.print();                    // "Jack->3,Tom->3"
maxPriorityQueue.clear();                    // undefined
console.log(  maxPriorityQueue.size());        // 0