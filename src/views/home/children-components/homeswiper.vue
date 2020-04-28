<template>
  <div class="home-swiper">
    <Swiper>
      <swiper-item v-for="(v,k) in banners" :key="k"> 
          <a :href="v.link"><img :src="v.image" alt=""></a>
      </swiper-item>
    
    </Swiper>

  </div>
</template>

<script>
import {Swiper,SwiperItem} from "../../../components/common/swiper/index"
  export default {
    name: "HomeSwiper",
    props:{
      banners:Array,
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>