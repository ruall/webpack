<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link :to="'/about/'+userInfo" tag="button" replace>关于</router-link>
<!--    <button @click="homeClick()">首页</button>-->
<!--    <button @click="aboutClick()">关于</button>-->
    <router-link :to="{path:'/prolife',query:{name:'ant',sex:'1',age:'18'}}" tag="button">档案</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userInfo:'aaa',
    }
  },
  methods:{
    homeClick(){
      // this.$router.push('home');
      this.$router.replace('home')
    },
    aboutClick(){
      // this.$router.push('about')
      this.$router.replace('about')
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active{
    color: red;
  }
</style>
