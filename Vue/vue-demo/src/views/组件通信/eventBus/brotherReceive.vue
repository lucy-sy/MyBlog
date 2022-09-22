<template>
    <div>
        <h1>this is brother receive</h1>
        <p>{{receiveMessage}}</p>
        <button @click="send">向发送方发送消息</button>
    </div>
</template>

<script>
import eventBus from './eventBus'
export default {
    data() {
        return {
            message: '我是接收方的消息',
            receiveMessage: ''
        }
    },
    created() {
        eventBus.$on("sendMessage", e => {
            this.receiveMessage = e
        })
    },
    methods: {
        send () {
            eventBus.$emit("receiveMessage", this.message)
        }
    },
}
</script>