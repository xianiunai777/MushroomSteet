<template>
  <div v-if="Object.keys(detailInfo).length!=0">
    <div class="info-desc">{{detailInfo.desc}}</div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img @load="imgLoad" v-for="(v,k) in detailInfo.detailImage[0].list" :key="k" :src="v" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetialGoods",
  data() {
    return {
      imgLength: 0,
      num:0
    };
  },
  props: {
    detailInfo: Object
  },
  methods: {
    imgLoad() {
      this.num++;
      if(this.num ===this.imgLength){
         this.$emit("imgload");
      }
     
    }
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.info-key{
  font-size: 20px;
  margin: 10px;
}
.info-desc{
 margin: 0 10px;
}
.info-list img{
  width: 100%;
}
</style>