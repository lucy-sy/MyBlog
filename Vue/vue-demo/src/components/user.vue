<template>
    <div>
        <h2>直接占位符</h2>
        <h3>用户是：{{name}}</h3>
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
        this.getData(this.$route.params.id)
    },
    watch: {
        // 通过watch监听路由参数的变化，以便于再次发送请求
        "$route": function() {
            this.getData(this.$route.params.id)
        }
    },
    methods: {
        getData(id) {
            this.name = id
        }
    },
}
</script>