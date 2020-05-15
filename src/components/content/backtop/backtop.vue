<template>
  <div class="back-top">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
.back-top{
  position: fixed;
  right:0;
  bottom: 75px;
  z-index:10000;
}
.back-top img{
  width: 50px;
}
</style>