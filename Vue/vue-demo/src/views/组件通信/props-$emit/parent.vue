<template>
  <div>
    <h1>this is parent</h1>
    <button @click="sendChild">传送数据到子组件</button>
    <p>{{ childMessage }}</p>
    <hr>
    <child :parentMessage="parentMessage" @childMessage="receiveChild"></child>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: "",
      childMessage: "",
    };
  },
  components: {
    child: () => import("./child.vue"),
  },
  methods: {
    receiveChild(e) {
      this.childMessage = e;
    },
    sendChild () {
      this.parentMessage = "我是父组件传到子组件的数据"
    }
  },
};
</script>