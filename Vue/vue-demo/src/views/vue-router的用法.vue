<template>
  <div>
    <h1>vue-router的用法</h1>
    <ol>
        <h2><li>动态路由</li></h2>
        <div>
            <ol>
                <h3><li>直接占位符</li></h3>
                <div v-for="(item, index) in students" :key="index">
                    <router-link :to="'/index/user/' + item">{{item}}</router-link>
                </div>
                <h3><li>路由属性中的 name + params 传参</li></h3>
                <button @click="goPageParams('小明')">小明</button>
                <h3><li>路由属性中的 path + query 传参</li></h3>
                <button @click="goPageQuery('李华')">李华</button>
            </ol> 
        </div>
    </ol>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
        students: ['李华', '张玲', '刘敏']
    };
  },
  methods: {
    goPageParams(item) {
      this.$router.push({
        name: 'manager',
        params: {
            id: item
        }
      });
    },
    goPageQuery(item) {
        this.$router.push({
            name: 'manager',
            query: {
                id: item
            }
        });
    }
  },
};
</script>