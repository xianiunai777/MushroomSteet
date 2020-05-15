<template>
 <div>
    <GoodsItem v-for="(v,k) in goods" :key="k" :goodsitem="v" ></GoodsItem>
 </div>
</template>

<script>
import GoodsItem from "./goodsitem"
  export default {
    name: "GoodsList",
    components:{
      GoodsItem
    },
    props:{
      goods:Array
    }
  }
</script>

<style scoped>

</style>