<template>
    <div>
        <h1>this is parent</h1>
        <p>学生的成绩是：{{grade}}</p>
        <button @click="getAge">获取学生年龄</button>
        <p>学生的年龄：{{age}}</p>
        <button @click="setAge(22)">修改学生年龄</button>
        <hr>
        <child ref="child"></child>
    </div>
</template>

<script>
export default {
    data () {
        return {
            grade: '99分',
            age: 0
        }
    },
    components: {
        child: () => import('./child.vue')
    },
    methods: {
        getAge () {
            this.age = this.$refs.child.age
        },
        setAge (age) {
            this.$refs.child.age = age
        }
    },
}
</script>