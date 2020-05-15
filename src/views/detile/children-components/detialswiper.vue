<template>
 <div>
    <Swiper>
    <SwiperItem v-for="(v,k) in images" :key="k" class="detial-img">
      <img :src="v" alt="" >
    </SwiperItem>
  </Swiper>
 </div>
</template>

<script>
import {Swiper,SwiperItem} from "../../../components/common/swiper/index"
  export default {
    name: "DetialSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      images:Array
    }
  }
</script>

<style scoped>
.detial-img{
  height: 300px;
  overflow: hidden;
}
</style>