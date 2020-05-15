<template>
  <div class="recommend-info">
    <GoodsItem v-for="(v,k) in recommend" :key="k" :goodsitem="v"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from '../../../components/content/goods/goodsitem'
  export default {
    name: "DetialRecommend",
    components:{
      GoodsItem
    },
    props:{
      recommend:Array
    }
  }
</script>

<style scoped>

</style>