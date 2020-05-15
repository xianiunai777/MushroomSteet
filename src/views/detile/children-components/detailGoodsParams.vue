<template>
  <div class="params-info" v-if="Object.keys(goodsParams).length!=0">
    <table v-for="(v,k) in goodsParams.size" :key="k" class="info-size">
      <tr v-for="(tr,k) in v" :key="k" class="info-item"> 
        <td v-for="(td,k) in tr" :key="k">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(v1,k1) in goodsParams.infos" :key="k1">
        <td>{{v1.key}}</td>
        <td class="info-discrible">{{v1.value}}</td>
      </tr>
    </table>
    <div class="info-img">
      <img :src="goodsParams.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetialGoodsParams",
  props: {
    goodsParams: Object
  }
};
</script>

<style scoped>
.info-size,.info-item,.info-param{
 width: 100%;
 
}
.params-info{
  text-align: center;
}
.info-param{
  margin: 10px 0 20px;
}
.info-item td{
  width: 25%;
}
.info-discrible{
  width: 75%;
  padding: 0 10% ;
  text-align: left;
  color:pink;
}
</style>