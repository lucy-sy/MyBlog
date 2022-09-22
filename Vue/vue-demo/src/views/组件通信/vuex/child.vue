<template>
    <div>
        <h1>this is child</h1>
        <p>学生的成绩是：{{grade}}</p>
        <button @click="updateGradeAsync(85)">异步修改学生成绩</button>
        <p>学生的年龄是：{{age}}</p>
        <button @click="updateAge(25)">修改学生年龄</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    data () {
        return {}
    },
    computed: {
        ...mapState(['age','grade'])
    },
    methods: {
        ...mapMutations(['updateAge']),
        ...mapActions(['updateGradeAsync'])
    },
}
</script>