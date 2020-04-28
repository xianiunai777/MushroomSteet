<template>
  <div class="home-recommend">
    <div v-for="(v,k) in recommend" :key="k" class="recommend-item">
      <img :src="v.image" alt="">
      <div>{{v.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommend:Array,
    }
  }
</script>

<style scoped>
.home-recommend{
  display:flex;
  width: 100%;
  text-align: center;
  font-size:13px;
  margin: 10px 0;
}
.recommend-item{
  flex:1;
}
img{
  width: 70px;
  margin-bottom: 7px;
}
</style>