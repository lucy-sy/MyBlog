<template>
    <div>
        <h1>this is child</h1>
        <p>学生成绩：{{newStuGrade}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    inject: ['stuGrade'],
    computed: {
        newStuGrade: function() {
            return this.stuGrade()
        }
    }
}
</script>