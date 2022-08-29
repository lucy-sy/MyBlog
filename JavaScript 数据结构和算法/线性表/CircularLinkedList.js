// 双向循环
function CircularLinkedList() {
    function Node(element) {
        this.element = element // 当前节点的元素
        this.next = null // 下一个节点指针
    }

    this.length = 0 // 链表的长度
    this.head = null // 链表的头部节点

    // 向链表尾部添加一个新的节点
    this.append = function(element) {
        // 将要添加的新节点
        let node = new Node(element)
        // 当前所在节点
        let currentNode

        // 判断链表是否为空链表
        if(!this.head) {
            // 是，则把当前节点当作头部节点
            this.head = node
            node.next = this.head
        } else {
            currentNode = this.head
            // 否，则从this.head开始一直查找到最后一个node
            while(currentNode.next !== this.head) {
                currentNode = currentNode.next
            }
            // 当前节点的next指针指向新节点
            currentNode.next = node
            // 组后一个节点指向头指针
            node.next = this.head
        }

        // 链表长度+1
        this.length++
        return true
    }

    // 向指定位置插入新节点
    this.insert = function(position, element) {
        // 判断是否越界
        if(position < 0 || position > this.length) {
            return false
        } else {
            let node = new Node(element)
            // 记录当前指针所在的节点
            let currentNode = this.head
            // 记录当前节点的位置
            let index = 0
            // 记录上一个节点
            let previousNode

            // 判断插入的位置是否是头部节点
            if(position == 0) {
                node.next = this.head
                this.head = node
            } else {
                while(index < position) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                    index++
                }
                // 把上一个节点的指针指向新节点，新节点的指针指向当前节点
                node.next = currentNode
                previousNode.next = node
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
                this.head = currentNode.next
            } else {
                while(index < position) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                    index++
                }
                // 将上一个节点的next指针 指向 当前节点的next指针，即删除当前节点
                previousNode.next = currentNode.next
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

        while(currentNode && index < this.length) {
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
        let index = 0

        while(index < this.length) {
            string+=','+currentNode.element
            currentNode = currentNode.next
            index++
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


// 创建单向链表实例
var circularLinked = new CircularLinkedList();
console.log(circularLinked.removeAt(0)); // false
console.log(circularLinked.isEmpty()); // true
circularLinked.append('Tom');
circularLinked.append('Peter');
circularLinked.append('Paul');
circularLinked.print(); // "Tom,Peter,Paul"
circularLinked.insert(0, 'Susan');
circularLinked.print(); // "Susan,Tom,Peter,Paul"
circularLinked.insert(1, 'Jack');
circularLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(circularLinked.getHead()); // "Susan"
console.log(circularLinked.isEmpty()); // false
console.log(circularLinked.indexOf('Peter')); // 3
console.log(circularLinked.indexOf('Cris')); // -1
circularLinked.remove('Tom');
circularLinked.removeAt(2);
circularLinked.print(); // "Susan,Jack,Paul"
console.log(circularLinked.list()); // 具体控制台