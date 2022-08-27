function MinPriorityQueue() {
    this.queue = []

    // 按最小优先级向队列中添加元素
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
                if(this.queue[i].priority > priority) {
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

    // 打印元素
    this.print = function() {
        let newArr = []
        for(let i=0; i<this.size(); i++) {
            newArr.push(`${this.queue[i].element}->${this.queue[i].priority}`)
        }
        console.log(newArr.toString())
    }
}

// 创建最小优先队列minPriorityQueue实例
var minPriorityQueue = new MinPriorityQueue();

console.log(minPriorityQueue.isEmpty());     // true
minPriorityQueue.enqueue("John", 1);         // undefined
minPriorityQueue.enqueue("Jack", 3);         // undefined
minPriorityQueue.enqueue("Camila", 2);       // undefined
minPriorityQueue.enqueue("Tom", 3);          // undefined
minPriorityQueue.print();                    // "John->1,Camila->2,Jack->3,Tom->3"
console.log(minPriorityQueue.size());        // 4
console.log(minPriorityQueue.isEmpty());     // false
console.log(minPriorityQueue.dequeue());                  // {element: "John", priority: 1}                // {element: "Camila", priority: 2}
minPriorityQueue.print();                    // "Jack->3,Tom->3"
minPriorityQueue.clear();                    // undefined
console.log(minPriorityQueue.size());        // 0