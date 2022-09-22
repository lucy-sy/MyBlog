<template>
    <div>
        <h1>this is brother send</h1>
        <p>{{receiveMessage}}</p>
        <button @click="send">向接收方发送消息</button>
        <hr>
        <brother-receive></brother-receive>
    </div>
</template>

<script>
import eventBus from './eventBus'
export default {
    data() {
        return {
            message: '我是发送方的消息',
            receiveMessage: ""
        }
    },
    created() {
        eventBus.$on("receiveMessage", e => {
            this.receiveMessage = e
        })
    },
    methods: {
        send () {
            eventBus.$emit("sendMessage", this.message)
        }
    },
    components: {
        brotherReceive: () => import("./brotherReceive.vue")
    }
}
</script>