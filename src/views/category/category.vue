<template>
  <div id="categroy">
    <Navbar class="cate-navbar">
      <div slot="center">商品分类</div>
    </Navbar>
      <NavList :titlelist="titleList" @changedData="changedData"></NavList>
      <CateInfo  :cateInfo="cateInfo" :goods="goods[currentType].list" @changeTab="changeTab" @loadmore="loadmore"></CateInfo>
  </div>
</template>

<script>
import BetterScroll from '../../components/common/BetterScroll/BetterScroll'
import NavList from './children-components/navlist'
import Navbar from "../../components/common/nav-bar/navbar";
import CateInfo from './children-components/categoryinfo'
// import  TabControl from "../../components/content/tabcontral/tabControl"
//获取数据
import {getCateData,getChangeData,getHomeGoods} from "../../network/category";
export default {
  name: "Category",
  data(){
    return {
      titleList:[],
      cateInfo:[],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell:{ page: 0, list: [] }
      },
      currentType:"pop",
    }
  },
  components: {
    Navbar,
    NavList,
    CateInfo,
    BetterScroll,
  },
  created() {
    this.getCateData()
    getChangeData("3627").then(res=>{
        this.cateInfo=res.data.list
      })
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getCateData() {
      getCateData().then(res => {
        // console.log(res.data.category.list);
        this.titleList=res.data.category.list
      });
    },
    changedData(maitKey){  
      getChangeData(maitKey).then(res=>{
        this.cateInfo=res.data.list
      })     
    },
     getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
      }).catch(res=>{
      })
      ;
      this.goods[type].page += 1;
    },
    changeTab(k){
       switch(k){
        case 0:this.currentType="pop"
        break
        case 1:this.currentType="new"
        break
        case 2:this.currentType="sell"
        break
      }
    },
    loadmore(){
      // this.$refs.scroll.finishpullup()
      this.getHomeGoods(this.currentType)
      
    }
  }
};
</script>

<style scoped>
.cate-navbar {
  background: hotpink;
  color: #fff;
  position: sticky;
  left: 0;
  top: 0;
  z-index:10000;
}
#categroy{
  height:100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.left{
  width: 100px;
  float: left;
   height:calc(100% - 90px);
}
.right{
   width: calc(100% - 100px);
   float:right;
}
</style>