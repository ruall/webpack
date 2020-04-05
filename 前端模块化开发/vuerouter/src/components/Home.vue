<template>
  <div>
    <h2>这是首页</h2>
    <p>这是首页内容，啊啊啊啊</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>

</style>
