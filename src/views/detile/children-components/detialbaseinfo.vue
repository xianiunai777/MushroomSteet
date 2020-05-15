<template>
  <div>
    <div class="base-info" v-if="Object.keys(goodsInfo).length!==0">
      <div class="info-title">{{goodsInfo.title}}</div>
      <div class="info-price">
        <span class="newprice">{{goodsInfo.nprice}}</span>
        <span class="oldprce">{{goodsInfo.oprice}}</span>
        <span class="discount">{{goodsInfo.discount}}</span>
      </div>
      <hr class="fengexian" />
      <div class="info-sell">
        <span>{{goodsInfo.columns[0]}}</span>
        <span>{{goodsInfo.columns[1]}}</span>
        <span>{{goodsInfo.service[3].name}}</span>
      </div>
      <div class="info-service">
        <span v-for="(v,k) in goodsInfo.service.slice(0,4)" :key="k">
          <img :src="v.icon" alt />
          <span>{{v.name}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetialBaseInfo",
  props: {
    goodsInfo: Object
  },
  methods: {},
  watch: {
    goodsInfo(val) {
      // console.log(val);
    }
  }
};
</script>

<style scoped>
.base-info {
  padding: 10px;
}
.info-service img {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
.info-title {
  line-height: 20px;
  height: 50px;
}
.newprice {
  font-size: 25px;
  color: rgb(221, 50, 130);
}
.oldprce {
  color: #999;
  margin: 0 5px;
  text-decoration: line-through;
}
.discount {
  display: inline-block;
  height: 30px;
  width: 45px;
  text-align: center;
  background: rgb(241, 96, 164);
  line-height: 25px;
  color: #fff;
  border-radius: 5px;
  vertical-align: top;
}
.info-sell {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}
.info-sell span {
  color: #ccc;
  /* width: 33%; */
}
.fengexian {
  margin: 20px 0 10px;
  border: none;
  height: 2px;
  background: #eee;
}
.info-service {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>