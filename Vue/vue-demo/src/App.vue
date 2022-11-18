<template>
  <div>
    <!-- <props-emit-parent></props-emit-parent> -->
    <!-- <parent-children-parent></parent-children-parent> -->
    <!-- <refs-parent></refs-parent> -->
    <!-- <grand-pa></grand-pa> -->
    <!-- <vuex-parent></vuex-parent> -->
    <!-- <event-bus></event-bus> -->
    <!-- <attrs-listeners-parent></attrs-listeners-parent> -->
    <!-- <router-view></router-view> -->
    <!-- <next-tick-show></next-tick-show> -->
    <keep-alive-use></keep-alive-use>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    propsEmitParent: () => import("./views/组件通信/props-$emit/parent.vue"),
    parentChildrenParent: () => import('./views/组件通信/$parent-$children/parent.vue'),
    refsParent: () => import('./views/组件通信/$refs/parent.vue'),
    grandPa: () => import('./views/组件通信/provide-inject/grandPa.vue'),
    vuexParent: () => import('./views/组件通信/vuex/parent.vue'),
    eventBus: () => import('./views/组件通信/eventBus/brotherSend.vue'),
    attrsListenersParent: () => import('./views/组件通信/$attrs-$listeners/parent.vue'),
    nextTickShow: () => import('./views/nextTick的使用.vue'),
    keepAliveUse: () => import('./views/keepAlive/keep-alive使用.vue')
  },
};
</script>

<style>
</style>
