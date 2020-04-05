<template>
  <div>
    <h2>这是关于页</h2>
    <p>我是关于页内容，啊啊啊</p>
    {{userInfo}}
  </div>
</template>

<script>
  export default {
    name: "About",
    computed:{
      userInfo(){
        return this.$route.params.info
      }
    }
  }
</script>

<style scoped>

</style>
