class Vue {
    constructor(obj_instance) {
        this._data = obj_instance.data
        // 数据劫持
        Observer(this._data)
        Compile(obj_instance.el, this)
    }
}

// 监听器 ---- 数据劫持，通过set监听实例对象里的每一个属性
function Observer(data_instance) {
    // 递归出口
    if(!data_instance || typeof data_instance !== 'object') return

    let dep = new Dependency() // dep依赖，负责收集和通知各个订阅者
    Object.keys(data_instance).forEach( key => {
        let value = data_instance[key]
        Observer(value) // 递归 ---- 子属性数据劫持
        Object.defineProperty(data_instance, key, {
            enumerable: true,
            configurable: true,
            get() {
                // console.log(`${key}被调用了`)
                // 向dep收集刚刚创建的订阅者
                if(Dependency.temp) {
                    dep.addSubs(Dependency.temp)
                }
                return value
            },
            set(newValue) {
                // console.log(`${key}被修改了`)
                value = newValue
                // 若newValue是一个对象类型，则继续递归value ---- 把 value 新的子属性进行数据劫持
                Observer(value)
                // 消息订阅器通知订阅者
                dep.notify()
            }
        })
    })
}


// 编译器 ---- 编译解析模板
function Compile(element, vm) {
    vm.$el = document.querySelector(element)
    // 创建文档碎片（相当于创建虚拟DOM）
    const fragment = document.createDocumentFragment()
    let child
    // 循环遍历vm.$el，将vm.$el中的子节点全部放在文档碎片fragment中
    while( child = vm.$el.firstChild ) {
        fragment.append(child)
    }
    
    // 替换文档碎片的内容
    fragment_compile(fragment)

    function fragment_compile(node) {
        // 设计需要进行匹配的正则表达式 ---- vue中的插值表达式
        let pattern = /\{\{\s*(\S+)\s*\}\}/

        // 如果节点类型为3，则进行数据替换并返回;
        if(node.nodeType === 3) {
            // 记录文本节点内初始化时的值，方便之后每次更新时文本值的替换
            let oldNodeValue = node.nodeValue

            // result_regex数组存放匹配是否成功的结果
            let result_regex = pattern.exec(node.nodeValue)
            if(result_regex) {
                let arr = result_regex[1].split('.')
                // 获取对象的key对应的value
                let value = arr.reduce((pre, current)=>pre[current], vm._data)
                // 将模板中{{xxx}}替换成value
                node.nodeValue = node.nodeValue.replace(pattern, value)

                // 创建订阅者，绑定更新函数
                new Watcher(vm, result_regex[1], newValue => {
                    node.nodeValue = oldNodeValue.replace(pattern, newValue)
                })
            }
            return
        }

        // 查找input节点
        if(node.nodeType === 1 && node.nodeName === 'INPUT') {
            // 获取节点属性
            const attr = Array.from(node.attributes)
            attr.forEach(i => {
                if(i.nodeName === 'v-model') {
                    // i.nodeValue表示的是key
                    let value = i.nodeValue.split('.').reduce((pre, current) => pre[current], vm._data)
                    node.value = value
                    // 创建input上的订阅者
                    new Watcher(vm, i.nodeValue, newValue => {
                        node.value = newValue
                    })
                    // input节点的绑定事件
                    node.addEventListener('input', e => {
                        let arr1 = i.nodeValue.split('.')
                        let arr2 = arr1.slice(0, arr1.length-1)
                        let final = arr2.reduce((pre, current) => pre[current], vm._data)
                        final[arr1[arr1.length-1]] = e.target.value                       
                    })
                }
            })
        }

        // 如果节点类型不为3，则继续向深层次进行循环递归
        node.childNodes.forEach(child => fragment_compile(child))
    }
    // 将文档碎片应用到页面
    vm.$el.appendChild(fragment)
}


// 订阅者
class Watcher {
    constructor(vm, key, callback) {
        this.vm = vm
        this.key = key
        this.callback = callback
        // 暂存当前创建的watcher
        Dependency.temp = this
        this.key.split('.').reduce((pre, current) => pre[current], this.vm._data)
        Dependency.temp = null
    }

    update() {
        const newValue = this.key.split('.').reduce((pre, current) => pre[current], this.vm._data)
        this.callback(newValue)
    }
}


// 消息订阅器 ---- 收集和通知订阅者
class Dependency {
    constructor() {
        this.subscribers = []
    }

    // 收集订阅者
    addSubs(sub) {
        this.subscribers.push(sub)
    }

    // 通知订阅者
    notify() {
        this.subscribers.forEach( sub => {
            sub.update()
        })
    }
}