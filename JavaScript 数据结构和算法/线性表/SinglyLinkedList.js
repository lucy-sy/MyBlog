// 单向链表
function SinglyLinkedList() {
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
        let currentNode = this.head

        // 判断链表是否为空链表
        if(this.head == null) {
            // 是，则把当前节点当作头部节点
            this.head = node
        } else {
            // 否，则从this.head开始一直查找到最后一个node
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            // 当前节点的next指针指向新节点
            currentNode.next = node
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


// 创建单向链表实例
var singlyLinked = new SinglyLinkedList();
console.log(singlyLinked.removeAt(0)); // false
console.log(singlyLinked.isEmpty()); // true
singlyLinked.append('Tom');
singlyLinked.append('Peter');
singlyLinked.append('Paul');
singlyLinked.print(); // "Tom,Peter,Paul"
singlyLinked.insert(0, 'Susan');
singlyLinked.print(); // "Susan,Tom,Peter,Paul"
singlyLinked.insert(1, 'Jack');
singlyLinked.print(); // "Susan,Jack,Tom,Peter,Paul"
console.log(singlyLinked.getHead()); // "Susan"
console.log(singlyLinked.isEmpty()); // false
console.log(singlyLinked.indexOf('Peter')); // 3
console.log(singlyLinked.indexOf('Cris')); // -1
singlyLinked.remove('Tom');
singlyLinked.removeAt(2);
singlyLinked.print(); // "Susan,Jack,Paul"
console.log(singlyLinked.list()); // 具体控制台