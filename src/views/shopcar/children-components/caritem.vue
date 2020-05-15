<template>
<div class="car-items">
  <div class="car-left">
    <CheckButton :carList="carList.check" @click.native="getCheck(carList)" > </CheckButton>
    <img :src="carList.img" alt="">
  </div>
 
 <div class="car-right">
     <p class="car-title">{{carList.title}}</p>
     <p class="car-title">商品描述:{{carList.desc}}</p>
     <p>
       <span class="car-price">¥{{carList.highPrice}}</span>
       <span class="car-num">×{{carList.count}}</span>
     </p>
   </div>
</div>
   
</template>

<script>
import CheckButton from './checked'
  export default {
    name: "CarItem",
    props:{
      carList:Object
    },
    components:{
      CheckButton
    },
    data(){
      return{
        isTrue:true,
        isValue:[],
        isChange:false
        }
    },
    watch:{
      carList(val){   
      }
  },
  methods:{
   getCheck(carList){
     this.$store.commit("changeCheck",carList)
     this.isChange=this.$store.state.cartList.every(function(item){
       return item.check==true
     })
    
    }
  }
  }
</script>

<style scoped>
.car-items{
  width: 100%;
  display: flex;
  padding:10px 0 ;
  border-bottom: 1px solid #eee;
}
.car-left img{
  width: 100px;
  height: 120px;
  border-radius: 10px;
  vertical-align: middle;
}
.car-left{
  width: 150px;
  display: flex;
  align-items: center;
}
.car-right{
  flex:1;
}
.car-title{
  line-height:35px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-clamp: 1;
  -webkit-line-clamp: 1;
}
.car-title:first-of-type{
  font-size: 18px;
  color:#000;
}
.car-title:last-of-type{
  font-size: 14px;
}

.car-price{
  margin-top: 20px;
  color:orangered;
  font-size: 18px;
  float: left;
}
.car-num{
   margin-top: 20px;
   font-size: 18px;
   float: right;
}

</style>