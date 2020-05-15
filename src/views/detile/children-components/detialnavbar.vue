<template>
  <div>
    <Navbar class="detialbar">
    <div slot="left"><img src="../../../assets/img/common/back.svg" alt="" @click="backHome"></div>
    <div slot="center" class="detial-center">
      <div v-for="(v,k) in title" :key="k" :class="{active:k==currentindex}" @click="isActive(k)">{{v}}</div>
    </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../components/common/nav-bar/navbar"
  export default {
    name: "DetialNavBar",
    components:{
      Navbar
    },
    data(){
      return{
        title:["商品","参数","评论","推荐"],
        currentindex:0
      }
    },
    methods:{
      isActive(k){
        this.$emit('title',k)
        this.currentindex=k
      },
      backHome(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.active{
  color:pink
}
.detialbar img{
  vertical-align:text-bottom;
}
.detial-center{
 display: flex;
}
.detial-center div{
  flex: 1;
}
</style>