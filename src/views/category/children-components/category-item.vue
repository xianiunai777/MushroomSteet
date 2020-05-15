<template>
  <div class="cate-item">
    <img :src="cateItem.image" width="80px" alt />
    <p>{{cateItem.title}}</p>
  </div>
</template>
<script>
export default {
  name: "CategoryItem",
  props: {
    cateItem: Object
  }
};
</script>
<style scoped>
.cate-item img{
  width: 100%;
}
.cate-item p{
  font-size:13px;
  margin-top:15px;
}
/* .cate-item{
  display: inline-block;
} */
</style>