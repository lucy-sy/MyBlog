<template>
    <div>
        <h1>this is grandson</h1>
        <p>子组件通过<b>$attrs</b>将剩余未接收的数据传给孙子组件</p>
        <b>b: {{b}}</b>
        <br>
        <b>c: {{c}}</b>
        <br>
        <button @click="funGrandson">孙子组件发送数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            b: '',
            c: ''
        }
    },
    created() {
        console.log(this.$attrs) // {b: 'bbbbb', c: 'ccccc'}
        this.b = this.$attrs.b
        this.c = this.$attrs.c
    },
    methods: {
        funGrandson() {
            this.$emit("funGrandson", "孙子组件")
        }
    },
}
</script>