<template>
  <div class="home">
    <Navbar class="nav-bar"><div slot="center">蘑菇街</div> </Navbar>
    <TabControl :titles='["流行","新款","精选"]' class="tab-control" @tabclick="tabclick" v-show="isTopShow<-610" ref="TabFixed"></TabControl>
    <BetterScroll :pullUpLoad="true" :probetype="3" class="better-scroll" @scroll="homescroll" ref="scroll" @pullingup="loadmore">
    <HomeSwiper :banners="banners"></HomeSwiper>
     <HomeRecommend :recommend="recommend"></HomeRecommend>
    <HomePop />
    <TabControl :titles='["流行","新款","精选"]' class="tab-control" @tabclick="tabclick" ref="TabControl"  v-show="isTopShow>=-610"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList> 
   </BetterScroll>
   <BackTop v-show="isShow<-800" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
//common组件
import Navbar from "../../components/common/nav-bar/navbar";
import BetterScroll from "../../components/common/BetterScroll/BetterScroll"
//home子组件
import HomeSwiper from "./children-components/homeswiper";
import HomeRecommend from "./children-components/homeRecommend.vue";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import HomePop from "./children-components/homePop";
//content组件
import TabControl from "../../components/content/tabcontral/tabControl";
import GoodsList from "../../components/content/goods/goodslist"
import {backTopMixin} from '../../commont/mixin'
export default {
  name: "Home",
   mixins:[backTopMixin],
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePop,
    TabControl,
    GoodsList,
    BetterScroll,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell:{ page: 0, list: [] }
      },
      currentType:"pop",
      isShow: null,
      isTopShow:0
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabclick(k){
      switch(k){
        case 0:this.currentType="pop"
        break
        case 1:this.currentType="new"
        break
        case 2:this.currentType="sell"
        break
      }
      this.$refs.TabFixed.currentIndex =k;
      this.$refs.TabControl.currentIndex = k;
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.$refs.scroll.finishpullup()
        this.goods[type].list.push(...res.data.list);
      }).catch(res=>{
        this.$refs.scroll.finishpullup()
      })
      ;
      this.goods[type].page += 1;
    },
    homescroll(position){
      this.isTopShow=position
     this.backTopShow(position)
    },
    loadmore(){
      // this.$refs.scroll.finishpullup()
      this.getHomeGoods(this.currentType)    
    }
  }
};
</script>
<style scoped>
div{
  font-size: 13px;
}
.nav-bar {
  background: rgb(233, 85, 110);
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;
}
.tab-control {
  display:flex;
  transform: none;
  position:sticky;
  top: 40px;
  left: 0;
  z-index: 100000;
}
 .home{
  height: 100vh;
   /* height:486px;  */
}  
.better-scroll{
  transform: none;
  height:calc(100%-94px);
  overflow: hidden; 
  /* height:440px; */
}
</style>