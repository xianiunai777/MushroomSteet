<template>
  <div id="detial">
    <DetialNavBar @title="titleClick" ref="nav"></DetialNavBar>
    <BetterScroll class="content" ref="scroll" @scroll="bsScroll" :probetype="3"> 
      <DetialSwiper :images="topImages"></DetialSwiper>
      <DetialBaseInfo :goodsInfo="goodsInfo"></DetialBaseInfo>
      <detailShopInfo :shops="shop"></detailShopInfo>
      <DetialGoods :detailInfo="detailInfo" @imgload="imgLoad" ref="goods"></DetialGoods>
      <DetialGoodsParams :goodsParams="goodsParams"></DetialGoodsParams>
      <DetialComment :comment="comment" ref="comment"></DetialComment>
      <DetialRecommend :recommend="recommend" ref="recommend"></DetialRecommend>
    </BetterScroll>
     <BackTop v-show="isShow<-800" @click.native="backTop"></BackTop>
    <DetialBottomBar @addcar="addcar"></DetialBottomBar>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/BetterScroll/BetterScroll";
import {
  getDataDetial,
  GoodsInfo,
  GoodsParam,
  dateFormat,
  getHotDataDetial,
  debounce
} from "../../network/detial";
import DetialSwiper from "./children-components/detialswiper";
import DetialNavBar from "./children-components/detialnavbar";
import DetialBaseInfo from "./children-components/detialbaseinfo";
import detailShopInfo from "./children-components/detailShopInfo";
import DetialGoods from "./children-components/detailGoods";
import DetialGoodsParams from "./children-components/detailGoodsParams";
import DetialComment from "./children-components/detialComment";
import DetialRecommend from "./children-components/detialrecommend";
import DetialBottomBar from "./children-components/detailBottomBar";
// import BackTop from "../../components/content/backtop/backtop"
import {backTopMixin} from '../../commont/mixin'
export default {
  name: "Detile",
  mixins:[backTopMixin],
  components: {
    DetialNavBar,
    DetialSwiper,
    DetialBaseInfo,
    detailShopInfo,
    DetialGoods,
    BetterScroll,
    DetialGoodsParams,
    DetialComment,
    DetialRecommend,
    DetialBottomBar,
    // BackTop
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      comment: {},
      recommend: [],
      position: [],
      getPosition:null,
      currentIndex:0,
      isShow:null
    };
  },
  mounted() {},
  created() {
    this.iid = this.$route.params.id;
    getDataDetial(this.iid).then(res => {
      // console.log(res);
      let data = res.result;
      console.log(data);
      this.topImages = data.itemInfo.topImages;
      this.goodsInfo = {
        ...new GoodsInfo(data.columns, data.itemInfo, data.shopInfo)
      };
      // console.log(this.goodsInfo);
      this.shop = data.shopInfo;
      this.detailInfo = data.detailInfo; //获取商品参数数据
      this.goodsParams = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // console.log(this.goodsParams);
      //获取评论数据
      if (data.rate.list) {
        this.comment = data.rate.list[0];
      }
    });
    //请求热门推荐数据
    getHotDataDetial().then(res => {
      // console.log(res);
      this.recommend = res.data.list;
    });
    this.getPosition=debounce(function(){
      this.position = [];
      this.position.push(0);
      this.position.push(-this.$refs.goods.$el.offsetTop + 44);
      this.position.push(-this.$refs.comment.$el.offsetTop + 44);
      this.position.push(-this.$refs.recommend.$el.offsetTop + 44);
      })
     
  },
  updated() {

  },
  methods: {
    // backTop(){
    //   // this.$refs访问某个子组件 组件名就是this.$refs后紧跟的内容,在该组件标签上定义ref="标识名"
    //   this.$refs.scroll.bs.scrollTo(0,0,1500)
    // },
    addcar(){
      let carInfo={}
      carInfo.img=this.topImages[0]
      carInfo.title=this.goodsInfo.title
      carInfo.desc=this.goodsInfo.desc
      carInfo.highPrice=this.goodsInfo.highPrice
      carInfo.iid=this.iid
      this.$store.dispatch("addcarAtt",carInfo);
      console.log(carInfo);
    },
    imgLoad() {
      this.$refs.scroll.bs.refresh();
      this.getPosition()
    },
    titleClick(index) {
      this.$refs.scroll.bs.scrollTo(0, this.position[index], 1000);
    },
    bsScroll(y) {
    for (let i in this.position){
      if(this.currentIndex!==i&&(y<=this.position[1*i] && y >this.position[1*i+1] &&i<this.position.length-1 || i==this.position.length-1&&y<this.position[i])){
       this.currentIndex=i
      //  console.log(i);          
        this.$refs.nav.currentindex=i
      }
    }
     this.backTopShow(y)
    }
  }
};
</script>

<style scoped>
#detial {
  position: relative;
  z-index: 10000;
  background: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
}
</style>