<template>
  <div class="home">
    <Navbar class="nav-bar">
      <div slot="center">蘑菇街</div>
    </Navbar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <HomePop/>
    <TabControl :titles='["流行","新款","精选"]' class="tab-control"></TabControl>
  </div>
</template>

<script>
//common组件
import Navbar from "../../components/common/nav-bar/navbar";
//home子组件
import HomeSwiper from "./children-components/homeswiper";
import HomeRecommend from "./children-components/homeRecommend.vue"
import {getHomeMultidata} from "../../network/home";
import HomePop from "./children-components/homePop";
//content组件
import TabControl from "../../components/content/tabcontral/tabControl"
export default {
  name: "Home",
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend,
    HomePop,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommend: [],
    };
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
  }
};
</script>
<style scoped>
.nav-bar {
  background: rgb(233, 85, 110);
  color: #fff;
  position: sticky;
  top: 0;
  left: 0;
}
.tab-control{
  position: sticky;
  top:40px;
  left: 0;
}
</style>