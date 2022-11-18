function Promise(executor) {
    // 添加属性
    this.PromiseState = 'pending'
    this.PromiseResult = null
    // 保存回调函数的数组
    this.callbacks = []
    
    // 保存实例对象的this值
    const _this = this

    // resolve函数
    function resolve(value) {
        if(_this.PromiseState != 'pending') return
        _this.PromiseState = 'fulfilled'
        _this.PromiseResult = value
        _this.callbacks.forEach(item=>{
            item.onResolved(_this.PromiseResult)
        })
    }

    //reject函数
    function reject(reason) {
        if(_this.PromiseState != 'pending') return
        _this.PromiseState = 'rejected'
        _this.PromiseResult = reason
        _this.callbacks.forEach(item=>{
            item.onRejected(reason)
        })
    }

    //抛出异常
    try{
        executor(resolve,reject)
    }catch(e) {
        reject(e)
    }
}

Promise.prototype.then = function(onResolved,onRejected) {

    const self = this

    if(typeof onResolved !== 'function'){
        onResolved = value => value
    }
    if(typeof onRejected !== 'function'){
        onRejected = reason => {
            throw reason
        }
    }

    return new Promise((resolve,reject)=>{
        function callback(type) {
            try {
                let result = type(self.PromiseResult)
                if(result instanceof Promise){
                    result.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                    })
                }else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
            }
        }

        if(self.PromiseState == 'fulfilled'){
            callback(onResolved)
        }
        if(self.PromiseState == 'rejected'){
            callback(onRejected)
        }
        if(self.PromiseState == 'pending'){
            self.callbacks.push({
                onResolved: function(){
                    callback(onResolved)
                },
                onRejected: function(){
                    callback(onRejected)
                }
            })
        }
    })
}

Promise.prototype.catch = function(onRejectd){
    return this.then(undefined,onRejectd)
}

Promise.all = function(promises) {
    return new Promise((resolve,reject)=>{
        let count = 0
        let arr = []
        for(let i=0;i<promises.length;i++){
            promises[i].then(v=>{
                count++
                arr[i] = v
                if(count==promises.length){
                    resolve(arr)
                }
            },r=>{
                reject(r)
            })
        }
    })
}

Promise.any = function(promises) {
    return new Promise((resolve,reject)=>{
        let count = 0
        let arr = []
        for(let i=0;i<promises.length;i++){
           promises[i].then(v=>{
               resolve(v)
           },r=>{
               count++
               arr[i] = r
               if(count == promises.length){
                   reject('AggregateError: All promises were rejected')
               }
           })
        }
    })
}

Promise.race = function(promises) {
    return new Promise((resolve,reject)=>{
        let count = 0
        let arr = []
        for(let i=0;i<promises.length;i++){
            promises[i].then(v=>{
                resolve(v)
            },r=>{
                reject(r)
            })
        }
    })
}

Promise.resolve = function(value){
    return new Promise((resolve,reject)=>{
        if(value instanceof Promise){
            value.then(v=>{
                resolve(v)
            },r=>{
                reject(r)
            })
        }else{
            resolve(value)
        }
    })
        
}

Promise.reject = function(reason){
    return new Promise((resolve,reject)=>{
        reject(reason)
    })
}