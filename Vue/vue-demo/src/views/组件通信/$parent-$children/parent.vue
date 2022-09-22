<template>
    <div>
        <h1>this is parent</h1>
        <p>学生的成绩是：{{grade}}</p>
        <button @click="getAge">获取学生1年龄</button>
        <p>学生1的年龄：{{age}}</p>
        <button @click="setAge(22)">修改学生2年龄</button>
        <hr>
        <child></child>
        <child></child>
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
            this.age = this.$children[0].age
        },
        setAge (age) {
            this.$children[1].age = age
        }
    },
}
</script>