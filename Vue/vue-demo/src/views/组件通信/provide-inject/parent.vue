<template>
    <div>
        <h1>this is parent</h1>
        <p>学生姓名：{{stu.name}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    inject: ['stu'],
}
</script>