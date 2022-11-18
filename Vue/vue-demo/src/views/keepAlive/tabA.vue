<template>
    <div>
        <div id="tabA" @click="visited" :class="visitedTabA ? 'visit': ''"></div>
    </div>
</template>

<script>
export default {
    name: 'tabA',
    data() {
        return {
            visitedTabA: false
        }
    },
    methods: {
        visited() {
            this.visitedTabA = true
        }
    },
}
</script>

<style scoped>
#tabA {
    width: 200px;
    height: 200px;
    background-color: cadetblue;
}
.visit {
    background-color: brown;
}
</style>