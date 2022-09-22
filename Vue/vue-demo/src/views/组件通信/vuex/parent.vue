<template>
    <div>
        <h1>this is parent</h1>
        <p>学生的成绩是：{{grade}}</p>
        <p>学生的年龄：{{age}}</p>
        <hr>
        <child ref="child"></child>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {}
    },
    computed: {
        ...mapState(['grade', 'age'])
    },
    components: {
        child: () => import('./child.vue')
    }
}
</script>