<template>
    <div>
        <h1 style="text-align: center">keep-alive 的使用方法</h1>
        <home></home>
    </div>
</template>

<script>
export default {
    components: {
        home: () => import('./home.vue')
    }
}
</script>