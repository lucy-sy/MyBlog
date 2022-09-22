/**
  * 思路：
  *  1、判断传入的头节点是否为空，是则直接返回当前头节点作为新的头节点
  *  2、遍历链表，删除符合条件的节点
  */
 var removeElements = function(head, val) {
    // 如果head为空，则直接返回head
    if(!head) return head

    let currentNode = head
    let previousNode
    while(currentNode) {
        if(head.val == val) {
             // 如果头节点符合条件。则删除当前头节点，头部节点往后顺移
            head = head.next
            currentNode = head
        } else if(currentNode.val === val) {
            // 如果当前节点符合条件，则删除当前节点。previousNode的next 指向 currentNode的next，currentNode 指向 currentNode的next节点
            previousNode.next = currentNode.next
            currentNode = currentNode.next
        } else {
            // 如果当前节点不符合条件，则将previousNode 指向 当前节点，currentNode 指向 当前节点的next节点
            previousNode = currentNode
            currentNode = currentNode.next
        }
    }
    return head

};