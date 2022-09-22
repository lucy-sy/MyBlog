<template>
  <div>
    <h1>this is child</h1>
    <p>{{ parentMessage }}</p>
    <button @click="sendChild">传送数据到父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childMessage: "我是子组件传到父组件的数据"
    };
  },
  props: {
    parentMessage: {
      type: String,
      default: "",
    },
  },
  methods: {
    sendChild () {
      this.$emit('childMessage', this.childMessage)
    }
  },
};
</script>