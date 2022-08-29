import Queue from "./Queue.js";
/*
 *@Description：击鼓传花
 *@param: 姓名 一轮的传递个数
 *@return: 胜利者
 *@ClassAuthor: lusy
 *@Date: 2022-08-28 00:14:16
*/
// 循环队列
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