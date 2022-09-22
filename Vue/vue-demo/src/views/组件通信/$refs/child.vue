<template>
    <div>
        <h1>this is child</h1>
        <p>学生的年龄是：{{age}}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            age: 20,
            grade: ''
        }
    }
}
</script>