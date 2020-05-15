<template>
  <div id="detail-bottombar">
    <div class="bottom-barLeft">
      <div>
        <span class="icon serrvice"></span>
        <span class="text">客服</span>
      </div>
      <div>
        <span class="icon shop"></span>
        <span class="text">店铺</span>
      </div>
      <div>
        <span class="icon select"></span>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottom-barrigth">
      <div class="add-car" @click="addCar">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetialBottomBar",
  methods:{
    addCar(){
      this.$emit('addcar')
    }
  }
};
</script>

<style scoped>
#detail-bottombar {
  position: fixed;;
  bottom: 0;
  left: 0;
  z-index:10000;
  background: #fff;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-barLeft {
  display: flex;
  flex: 3;
  justify-content: space-around;
}
.bottom-barrigth {
  display: flex;
  flex: 4;
  height: 100%;
  line-height: 60px;
}
.bottom-barrigth div {
  flex: 1;
  text-align: center;
}
.add-car {
  background: yellow;
}
.buy {
  background: rgb(226, 134, 149);
  color: #fff;
}
.icon {
  display: block;
  width: 24px;
  height: 24px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0 /100%;
}
.icon.serrvice {
  background-position: 0px -59px;
}
.icon.shop {
  background-position: 0px -107px;
}
.icon.select {
  background-position: 0px -163px;
}
.text {
  font-size: 13px;
}
</style>