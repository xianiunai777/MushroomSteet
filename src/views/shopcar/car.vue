<template>
  <div id="car-info">
     <Navbar class="car-navbar">
        <div slot="center">购物车({{length}})</div>
     </Navbar>
     <BetterScroll class="content" :probetype="3">
       <CarItem  v-for="(v,k) in carlist" :key="k" :carList="v" ></CarItem>
     </BetterScroll>
     <CarBottomBar ref="nav"></CarBottomBar>
  </div>
</template>

<script>
import BetterScroll from "../../components/common/BetterScroll/BetterScroll"
import Navbar from '../../components/common/nav-bar/navbar'
import {mapGetters} from 'vuex'
import CarItem from './children-components/caritem'
import getters from '../../store/getters'
import CarBottomBar from './children-components/car-bottombar'
  export default {
    name: "Cart",
    components:{
      Navbar,
      CarItem,
      CarBottomBar,
      BetterScroll
    },
    computed:{
      ...mapGetters({
        length:'carLength',
        carlist:'carList'
      })
    },
    methods:{
      
    }
  }
</script>

<style scoped>
#car-info{
  height: 100vh;
}
.car-navbar{
  background: rgb(241, 131, 149);
}
.content{
  height: calc(100% - 120px);
}
</style>