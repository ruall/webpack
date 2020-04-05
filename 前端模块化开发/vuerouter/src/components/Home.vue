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
    name: "Home",
    path:'/home/news',
    data(){
      return{
        path:'home/news'
      }
    },
    //这两个函数只有在改组件保持了状态，使用了keep-alive组件时才会有效果
    activated(){
      this.$router.push(this.path);
    },
    deactivated() {
      console.log("deactivated")
    },
    beforeRouteLeave(to,from,next){
      this.path = this.$route.path
      next();
    }
  }
</script>

<style scoped>

</style>
