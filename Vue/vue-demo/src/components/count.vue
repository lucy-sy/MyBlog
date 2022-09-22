<template>
    <div>
        <h2>Count</h2>
    </div>
</template>

<script>
export default {
    name: 'count',
    created() {
        console.log('count创建了')
    },
    destroyed() {
        console.log('count销毁了')
    },
}
</script>