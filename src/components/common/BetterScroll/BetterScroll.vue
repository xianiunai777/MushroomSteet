<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
// import Pullup from "@better-scroll/pull-up";
// 注册插件
// BS.use(Pullup);
  export default {
    name: "BetterScroll",
    data(){
      return {
        bs:''
      }
    },
    props:{
      pullUpLoad:{
        type:Boolean,
        default:false
      },
      probeType:{
        type:Number,
        default:0
      }
    },
    mounted(){
    this.bs = new BS('.wrapper', {
    click:true,
    pullUpLoad:true,
    probeType:3
    })
    //滚动监听事件
    this.bs.on('scroll',(position)=>{
      this.$emit('scroll',position.y)
      // console.log(position);
      })
    this.bs.on('pullingUp',()=>{
      this.$emit('pullingup')  
    })
  },
  methods:{
    finishpullup(){
       this.bs.finishPullUp()
    }
  }
  }
</script>

<style scoped>
.wrapper{
 height:-webkit-calc(100% - 94px);
 /* height:400px; */
 overflow: hidden; 
}
</style>