<template>
  <div>
    <h2>档案</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.sex}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
  export default {
    name: "Prolife",
  }
</script>

<style scoped>

</style>
