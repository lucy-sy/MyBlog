<template>
    <div>
        <h1>this is child</h1>
        <p>学生的年龄是：{{age}}</p>
        <button @click="getGrade">获取学生的成绩</button>
        <p>学生的成绩是：{{grade}}</p>
        <button @click="setGrade('80分')">修改学生的成绩</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            age: 20,
            grade: ''
        }
    },
    methods: {
        getGrade () {
            this.grade = this.$parent.grade
        },
        setGrade (grade) {
            this.$parent.grade = grade
        }
    },
}
</script>