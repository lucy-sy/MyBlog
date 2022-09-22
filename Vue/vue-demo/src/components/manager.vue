<template>
    <div>
        <h1>this is Manager</h1>
        <h2>管理员是：{{name}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },
    created() {
        this.getData(this.$route.params.id || this.$route.query.id)
    },
    methods: {
        getData(id) {
            this.name = id
        }
    },
}
</script>