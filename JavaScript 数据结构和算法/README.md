# JavaScript 数据结构和算法

最近在补充自己以前落下的知识，算法的知识还是得自己敲一遍算法才行，所以决定写个笔记记录一下自己得学习进度，以便于之后方便复习

## 线性表

**线性表**：就是数据排成像一条线一样的结构。每个线性表上的数据最多只有前和后两个方向。数组、链表、队列、栈 等就是线性表结构。

**非线性表**：数据之间并不是简单的前后关系。二叉树、堆、图 就是非线性表。

### 数组

- **数组是用一组连续的内存空间来存储的**。

  数组支持 **随机访问**，根据下标随机访问的时间复杂度为 O(1)。

- **低效的插入和删除**。

  数组为了保持内存数据的连续性，会导致插入、删除这两个操作比较低效，因为底层通常是要进行大量的数据搬移来保持数据的连续性。
  插入与删除的时间复杂度如下：
  插入：从最好 O(1) ，最坏 O(n) ，平均 O(n)
  删除：从最好 O(1) ，最坏 O(n) ，平均 O(n)

- **数组中常用的操作方法**

  - `push()`：在末尾添加一个或多个元素，==修改原数组==，返回值：数组新的长度。
  - `pop()`：删除数组最后一个元素，无参数，==修改原数组==，返回值：删除元素的值。
  - `unshift()`：向数组的开头添加一个或者多个元素，==修改原数组==，返回值：数组新的长度。
  - `shift()`：删除数组的第一个元素，数组长度减1，无参数，==修改原数组==，返回值：删除元素的值。
  - `reverse()`：颠倒数组中元素的顺序，无参数，==修改原数组==，返回值：新的数组。
  - `sort()`：对数组的元素进行排序，==修改原数组==，返回值：新的数组。
  - `splice()`：数组删除`splice(第几个开始，要删除的个数)`，==修改原数组==，返回值：返回被删除项目的新数组。
  - `toString()`：把数组转换成字符串，逗号分隔每一项，返回值：一个字符串。
  - `join()`：参数为连接符，用于把数组中的所有元素用连接符连接成一个字符串，返回值：一个字符串。
  - `concat()`：连接两个或多个数组，不影响原数组，返回值：一个新的数组。
  - `slice()`：数组截取`slice(begin,end)`，返回值：返回被截取项目的新数组。
  - `indexOf()`：从前往后查找数组元素的索引号，不修改原数组，返回值：数组元素的索引号。
  - `lastIndexOf()`：从后往前查找数组元素的索引号，不修改原数组，返回值：数组元素的索引号。
  - `find()`：用于找出第一个符合条件的数组成员，返回值：数组元素。
  - `findIndex()`：用于找出第一个符合条件的数组成员的位置，返回值：索引号。
  - `includes()`：判断某个数组是否包含给定的值。

### 栈

1. **定义**

   - **先进后出**
   - 新添加的或待删除的元素都保存在栈的末尾，称作`栈顶`，另一端就叫`栈底`。
   - 在栈里，新元素都靠近栈顶，旧元素都接近栈底。
   - 从栈的操作特性来看，是一种 `操作受限`的线性表，只允许在一端插入和删除数据。
   - 不包含任何元素的栈称为`空栈`。

   栈也被用在编程语言的编译器和内存中保存变量、方法调用等，比如函数的调用栈。

2. **实现**

   - `push(element)`：添加一个（或几个）新元素到栈顶。
   - `pop()`：移除栈顶的元素，同时返回被移除的元素。
   - `peek()`：返回栈顶的元素，不对栈做任何修改。
   - `isEmpty()`：如果栈里没有任何元素就返回 true，否则返回 false。
   - `clear()`：移除栈里的所有元素。
   - `size()`：返回栈里的元素个数。

   ```js
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
   ```

### 队列

#### 普通队列

1. **定义**
   - 先进先出
   - 队列在尾部添加新元素，并从顶部移除元素。
   - 最新添加的元素必须排在队列的末尾。
   - 队列只有 入队 `push()` 和出队 `shift()`。
2. **实现**
   - `enqueue(element)`：向队列尾部添加新项。
   - `dequeue()`：移除队列的第一项，并返回被移除的元素。
   - `front()`：返回队列中第一个元素，队列不做任何变动。
   - `isEmpty()`：如果队列中不包含任何元素，返回 true，否则返回 false。
   - `size()`：返回队列包含的元素个数，与数组的 length 属性类似。
   - `print()`：打印队列中的元素。
   - `clear()`：清空整个队列。

```js
function Queue() {
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
let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(5)
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.front())
console.log(queue.print())
queue.clear()
console.log(queue.queue)


```

#### 优先队列

1. **定义**

   优先队列中元素的添加和移除是依赖`优先级`的。

2. **应用**

   - 排队买票，军人、残疾人优先级更高，可以优先买票。

3. **优先队列分为两类**

   - 最小优先队列：把优先级的值最小的元素被放置到队列的最前面。
   - 最大优先队列：把优先级值最大的元素放置在队列的最前面。

4. **实现**

   - 设置优先级，根据优先级正确添加元素，然后和普通队列一样正常移除。
   - 设置优先级，和普通队列一样正常按顺序添加，然后根据优先级移除。

5. **实现最小优先队列**

   ```js
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
   ```

6. **实现最大优先队列**

   ```js
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
   ```

#### 循环队列

1. **关键**：确定好队空和队满的判定条件。

2. **例子**：

   击鼓传花游戏：在这个游戏中，孩子们围城一个圆圈，击鼓的时候把花尽快的传递给旁边的人。某一时刻击鼓停止，这时花在谁的手里，谁就退出圆圈直到游戏结束。重复这个过程，直到只剩一个孩子（胜者）

3. **实现**

   ```js
   import Queue from "./Queue.js";
   /*
    *@Description：击鼓传花
    *@param: 姓名 一轮的传递个数
    *@return: 胜利者
    *@ClassAuthor: lusy
    *@Date: 2022-08-28 00:14:16
   */
   function hotPotato(nameList, nums) {
       // 新建一个队列
       let queue = new Queue()
       // 将参与者全部放到队列中
       for(let i=0; i<nameList.length; i++) {
           queue.enqueue(nameList[i])
       }
   
       // 当前队列人数大于1时，重复执行击鼓传花游戏，直至只剩下最后一个胜利者
       while(queue.size() > 1) {
           // 设置的每轮游戏中要传递的个数
           for(let i=0; i<nums; i++) {
               queue.enqueue(queue.dequeue())
           }
           // 当传递个数满足（即击鼓停止时），当前花传递到谁手中，谁就退出游戏
           let gameOutPerson = queue.dequeue()
           console.log(`${gameOutPerson} 在击鼓传花中被淘汰！`);
       }
   
       // 返回最后一个胜利者
       return queue.front()
   }
   
   // 测试
   var nameList = ["John", "Jack", "Camila", "Ingrid", "Carl"];
   var winner = hotPotato(nameList, 10);
   console.log(`最后的胜利者是：${winner}`);
   ```

   