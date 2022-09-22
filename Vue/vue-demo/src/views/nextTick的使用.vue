<template>
    <div>
        <h1 ref="msg">{{message}}</h1>
        <button @click="updateMsg">修改message内容</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'DOM更新前的内容'
        }
    },
    methods: {
        updateMsg() {
            this.message = 'DOM更新后的内容'
            console.log(this.$refs.msg.innerText)  // DOM更新前的内容  
            this.$nextTick(()=>{
                console.log(this.$refs.msg.innerText) // DOM更新后的内容
            })
        }
    }

}
</script>