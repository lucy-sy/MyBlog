<template>
    <div>
        <h1>this is grandpa</h1>
        <p>学生姓名：{{stu.name}}</p>
        <p>学生成绩：{{stuGrade}}</p>
        <button @click="updateStuName('李四')">修改学生姓名</button>
        <button @click="updateStuGrade(85)">修改学生成绩</button>
        <hr>
        <parent></parent>
        <hr>
        <child></child>
    </div>
</template>

<script>
export default {
    data () {
        return {
            stu: {
                name: '李华'
            },
            stuGrade: 90
        }
    },
    provide () {
        /**
         * provide和inject是不响应的，想要实现响应的方法：
         *  1、传入可响应的对象；
         *  2、通过计算属性计算注入的值
         */
        return {
            stu: this.stu,
            stuGrade: () => this.stuGrade
        }
    },
    components: {
        parent: () => import('./parent.vue'),
        child: () => import('./child.vue')
    },
    methods: {
        updateStuName (name) {
            this.stu.name = name
        },
        updateStuGrade (grade) {
            this.stuGrade = grade
        }
    },
}
</script>