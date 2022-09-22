<template>
    <div>
        <h1>keep-alive 的使用方法</h1>
        <router-link to="/home">home</router-link>|
        <router-link to="/count">count</router-link>
       <keep-alive>
            <router-view></router-view>
       </keep-alive>
    </div>
</template>

<script>
export default {
    
}
</script>