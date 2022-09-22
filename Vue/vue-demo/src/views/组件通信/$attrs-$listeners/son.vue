<template>
    <div>
        <h1>this is son</h1>
        <p>父组件传给子组件，并被子组件通过props接收的数据</p>
        <b>a: {{a}}</b>
        <hr>
        <grandson v-bind="$attrs" v-on="$listeners"></grandson>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {
        console.log(this.$attrs) // {b: 'bbbbb', c: 'ccccc'}
        console.log(this.$listeners)  // {funGrandson: f}
    },
    props: {
        a: {
            type: String,
            default: ''
        }
    },
    components: {
        grandson: () => import('./grandson.vue')
    }
}
</script>