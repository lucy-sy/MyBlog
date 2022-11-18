class Promise{
    // 构造方法，executor 执行器函数
    constructor(executor){
        // 添加属性
        this.PromiseState = "pending";
        this.PromiseResult = null;
        // 声明属性
        this.callbacks = [];
        // 保存实例对象的this值
        const _this = this;

        // resolve 函数
        function resolve(value) {
            // 判断状态
            if(_this.PromiseState !== 'pending') return;
            // 修改函数状态(PromiseState)
            _this.PromiseState = 'fullfilled';
            // 修改函数结果(PromiseResult)
            _this.PromiseResult = value;
            // 执行回调函数
            _this.callbacks.forEach(item=>{
                item.onResolved(_this.PromiseResult)
            })
        }
        // reject 函数
        function reject(reason) {
            // 判断状态
            if(_this.PromiseState !== 'pending') return;
            // 修改函数状态(PromiseState)
            _this.PromiseState = 'rejected';
            // 修改函数结果(PromiseResult)
            _this.PromiseResult = reason;
            // 执行回调函数
            _this.callbacks.forEach(item=>{
                item.onRejectd(_this.PromiseResult)
            })
        }
        
        // 捕捉异常
        try{
            // 同步调用 executor执行器函数
            executor(resolve, reject);
        }catch(e){
            reject(e);
        }

    }

    // then 方法封装
    then(onResolved,onRejectd){
        // 保存实例对象的this值
        const self = this;
        // 判断回调函数的参数,实现异常穿透
        if(typeof onRejectd !== 'function'){
            onRejectd  = reason => {
                throw reason;
            }
        }
        if(typeof onResolved !== 'function'){
            onResolved = value => value
        }

        return new Promise((resolve, reject)=>{
            // 封装函数
            function callback(type){
                // 调用回调函数
                try {
                    // 获取回调函数的执行结果
                    let result = type(self.PromiseResult);
                    if(result instanceof Promise){
                        // 如果是promise类型
                        result.then(v=>{
                            resolve(v);
                        }, r=>{
                            reject(r);
                        })
                    }else{
                        // 结果的对象状态为成功
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            }
            // 判断状态
            if(this.PromiseState === 'fullfilled'){
                // 调用onResolved回调函数
                callback(onResolved)
            }
            if(this.PromiseState === 'rejected'){
                // 调用reject回调函数
                callback(onRejectd)
            }

            // 判断 pending 状态
            if(this.PromiseState === 'pending'){
                // 保存回调函数
                /** 由于当前是pending状态，只有当前状态改变后才能调用绑定的所有回调函数。
                 *  实例对象同时绑定了多个回调函数then，所以需要将每一个pending状态时注册的
                 *  回调函数都保存在数组中，以便于状态改变后调用每一个回调函数。
                 */
                this.callbacks.push({
                    onResolved: function(){
                        callback(onResolved)
                    },
                    onRejectd: function(){
                        // 调用回调函数
                        callback(onRejectd)
                    }
                });
            }
        })
    }

    // catch 方法封装
    catch(onRejectd){
        return this.then(undefined, onRejectd)
    }

    /**
     * then 和 catch属于实例对象的函数，而后面的函数属于静态资源，要加上static
     */
    // 添加 resolve 方法
    static resolve(value){
        return new Promise((resolve, reject)=>{
            if(value instanceof Promise){
                value.then(v=>{
                    resolve(v)
                }, r=>{
                    reject(r)
                })
            }else{
                resolve(value)
            }
        })
    }

    // 添加reject方法
    static reject(reason){
        return new Promise((resolve, reject)=>{
            reject(reason)
        })
    }

    // 添加 all 方法
    static all(promises){
        return new Promise((resolve, reject)=>{
            // 声明变量
            let i = 0
            const arr = []
            // 遍历数组
            for(let j=0; j<promises.length; j++){
                promises[j].then(v=>{
                    arr[i] = v
                    i++
                    if(i === promises.length){
                        resolve(arr)
                    }
                }, r=>{
                    reject(r)
                })
            }
        })
    }

    // 添加 any 方法
    static any(promises){
        return new Promise((resolve, reject)=>{
            let count = 0;
            for(let i=0; i<promises.length; i++){
                promises[i].then(v=>{
                    resolve(v)
                }, r=>{
                    count++
                    if(count === promises.length){
                        reject('AggregateError: All promises were rejected')
                    }
                })
            }
        })
    }

    // 添加 race 方法
    static race(promises){
        return new Promise((resolve, reject)=>{
            for(let i=0; i<promises.length; i++){
                promises[i].then(v=>{
                    resolve(v)
                }, r=>{
                    reject(r)
                })
            }
        })
    }
}
