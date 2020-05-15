<template>
  <div id="car-bottom">
    <div class="all-checked">
      <CheckButton @click.native="allcheck" :carList="isChanged"></CheckButton>
      <span>全选</span>
    </div>
    <div>
      <span>合计 :</span>
      <span>¥ {{getPrice}}</span>
    </div>
    <div class="car-right">去计算({{getCount}})</div>
  </div>
</template>

<script>
import CheckButton from "../children-components/checked";
import { mapGetters } from "vuex";
import getters from "../../../store/getters";
export default {
  name: "CarBottomBar",
  data() {
    return {
      ischange: false
    };
  },
  components: {
    CheckButton
  },
  methods: {
    allcheck() {
      // this.isChanged=!this.isChanged
      this.$store.commit("allcheck",this.isChanged);
    }
  },
  computed: {
    ...mapGetters({
      length: "carLength",
      carlist: "carList"
    }),
    getPrice() {
      return this.carlist.filter(item =>item.check).reduce((pre,item)=>{
        return pre + item.count*item.highPrice
      },0).toFixed(2)
    },
    isChanged() {
      if(this.carlist.length>0){
         return this.carlist.every(item =>item.check)
      }
    },
    getCount(){
      return this.carlist.filter(item =>item.check).length
    }
  }
};
</script>

<style scoped>
#car-bottom {
  position: fixed;
  bottom: 50px;
  left: 0;
  background: #eee;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:1000000;
}
.car-right {
  width: 120px;
  background: rgb(250, 99, 44);
  height: 100%;
  text-align: center;
  color: #fff;
}
.all-checked {
  display: flex;
  align-items: center;
}
.allactive {
  background-color: hotpink;
  background-image: url("../../../assets/img/cart/tick.svg");
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
}
</style>