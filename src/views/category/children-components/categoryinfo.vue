<template>
  <div class="scroll-list-wrap">
     <TabControl ref="colTop" :titles='["综合","新品","销量"]' @tabclick="tabclick" class="tab-control" v-show="isShow<=-1319"></TabControl>
    <cube-scroll
      ref="scroll"
      :options="options"
      :scroll-events="['scroll']"
      @scroll="onScrollHandle"
      @pulling-up="onPullingUp"
      @pulling-down="onPullingDown"
    >
      <CategoryItem v-for="(val,index) in cateInfo" :key="index" :cateItem="val" class="cateitem"></CategoryItem>
      <TabControl ref="colNext" :titles='["综合","新品","销量"]' @tabclick="tabclick" v-show="isShow>-1319"></TabControl>
      <GoodsList :goods="goods"></GoodsList>
    </cube-scroll>
    <BackTop v-show="isShow<-600" @click.native="backTop"></BackTop>
  </div>
</template>
<script>
import CategoryItem from "./category-item";
import TabControl from "../../../components/content/tabcontral/tabControl";
import GoodsList from "../../../components/content/goods/goodslist";
import BackTop from "../../../components/content/backtop/backtop";
export default {
  name: "CateInfo",
  data() {
    return {
      isShow: 0
    };
  },
  props: {
    cateInfo: Array,
    goods: Array
  },
  computed: {
    options() {
      return {
        pullDownRefresh: true,
        pullUpLoad:true,
        scrollbar: false
        // stopPropagation:true
      };
    }
  },
  components: {
    CategoryItem,
    TabControl,
    GoodsList,
    BackTop
    // BetterScroll
  },
  methods: {
    tabclick(k) {
      this.$emit("changeTab", k);
      this.$refs.colTop.currentIndex=k
      this.$refs.colNext.currentIndex=k
    },
    onPullingUp() {
      
      setTimeout(()=>{
        this.$emit("loadmore")
        console.log("上拉");
        },3000)
      
    },
    onScrollHandle(pos) {
      this.isShow = pos.y;
      // console.log(this.isShow);   
    },
    onPullingDown() {
      console.log("下拉");
      
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 3000);
    }
  }
};
</script>
<style scoped>
#cateinfo {
}
.cateitem {
  width: 33%;
  padding: 15px 10px;
  text-align: center;
  display: inline-block;
}
.scroll-list-wrap {
  height: calc(100% - 90px);
}
.tab-control {
  display:flex;
  transform: none;
  position:sticky;
  top: 40px;
  left: 0;
  z-index: 100000;
}
</style>