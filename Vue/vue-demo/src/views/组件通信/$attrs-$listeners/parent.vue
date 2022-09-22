<template>
    <div>
        <h1>this is parent</h1>
        <p>父组件中将要传给子组件的数据</p>
        <b>a: {{a}}</b>
        <br>
        <b>b: {{b}}</b>
        <br>
        <b>c: {{c}}</b>
        <br>
        <b>接收到的数据：{{message}}</b>
        <hr>
        <son :a="a" :b="b" :c="c" @funGrandson="fun1"></son>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 'aaaaa',
            b: 'bbbbb',
            c: 'ccccc',
            message: ''
        }
    },
    components: {
        son: () => import('./son.vue')
    },
    methods: {
        fun1(e) {
            this.message = e
        }
    },
}
</script>