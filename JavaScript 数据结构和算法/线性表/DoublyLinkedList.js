// 双向链表
function DoublyLinkedList() {
    function Node(element) {
        this.element = element
        this.previous = null // 指向前继节点的指针
        this.next = null // 指向后继节点的指针
    }
    // 记录链表的长度
    this.length = 0 
    // 链表的头部节点
    this.head = null
    // 链表的尾部节点
    this.tail = null

    // 向链表尾部添加一个新的节点
    this.append = function(element) {
        let node = new Node(element)
        let currentNode = this.tail
        // 判断是否是空链表
        if(!currentNode) {
            // 是，则头尾指针都指向node节点
            this.tail = node
            this.head = node
        } else {
            currentNode.next = node
            node.previous = currentNode
            this.tail = node
        }
        this.length++
        return true
    }

    // 向指定位置插入新节点
    this.insert = function(position, element) {
        if(position < 0 || position > this.length) {
            // 越界
            return false
        } else {
            let node = new Node(element)
            let currentNode = this.head
            let index = 0
            let previousNode

            if(position == 0) {
                // 判断是否为空链表
                if(!currentNode) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = currentNode
                    currentNode.previous = node
                    this.head = node
                }
            } else {
                if(position == this.length) {
                    this.append(element)
                } else {
                    while(index < position) {
                        previousNode = currentNode
                        currentNode = currentNode.next
                        index++
                    }
                    node.next = currentNode
                    currentNode.previous = node
                    previousNode.next = node
                    node.previous = previousNode
                }

            }
            this.length++
            return true
        }

    }

    // 特定位置移除一项
    this.removeAt = function(position) {
        if(this.length == 0 || position < 0 || position >= this.length) {
            // 越界
            return false
        } else {
            let currentNode = this.head
            let index = 0
            let previousNode

            if(position == 0) {
                if(this.length == 1) {
                    this.head = null
                    this.tail = null
                } else {
                    this.head = currentNode.next
                    this.head.previous = null
                }
            } else if(position == this.length-1) {
                if(this.length == 1) {
                    this.head = null
                    this.tail = null
                } else {
                    this.tail = this.tail.previous
                    this.tail.next = null
                }
            } else {
                while(index < position) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                    index++
                }
                // 将上一个节点的next指针 指向 当前节点的next指针，将当前节点的next指针的previous 指向 previousNode指针 即删除当前节点
                previousNode.next = currentNode.next
                currentNode.next.previous = previousNode
            }
            this.length--
            return true
        }
    }

    // 移除一项元素
    this.remove = function(element) {
        let index = this.indexOf(element)
        this.removeAt(index)
    }

    // 返回元素在链表中的索引
    this.indexOf = function(element) {
        let currentNode = this.head
        let index = 0

        while(currentNode) {
            if(currentNode.element == element) {
                return index
            }
            currentNode = currentNode.next
            index++
        }
        return -1
    }

    // 判空
    this.isEmpty = function() {
        return this.length == 0
    }

    // 返回链表的长度
    this.size = function() {
        return this.length
    }

    // 返回链表的第一个元素
    this.getHead = function() {
        return this.head.element
    }

    // 转换字符串
    this.toString = function() {
        let string = ''
        let currentNode = this.head

        while(currentNode) {
            string+=','+currentNode.element
            currentNode = currentNode.next
        }
        return string.slice(1)
    }

    // 打印
    this.print = function() {
        console.log(this.toString())
    }

    // 获取整个链表
    this.list = function() {
        return this.head
    }
}


// 创建双向链表
var doublyLinked = new DoublyLinkedList();
console.log(doublyLinked.isEmpty()); // true
doublyLinked.append('Tom');
doublyLinked.append('Peter');
doublyLinked.append('Paul');
doublyLinked.print(); // "Tom,Peter,Paul"
doublyLinked.insert(0, 'Susan');
doublyLinked.print(); // "Susan,Tom,Peter,Paul"
doublyLinked.insert(1, 'Jack');
doublyLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(doublyLinked.getHead()); // "Susan"
console.log(doublyLinked.isEmpty()); // false
console.log(doublyLinked.indexOf('Peter')); // 3
console.log(doublyLinked.indexOf('Cris')); // -1
doublyLinked.remove('Tom');
doublyLinked.removeAt(2);
doublyLinked.print(); // "Susan,Jack,Paul"
console.log(doublyLinked.list()); // 请看控制台输出