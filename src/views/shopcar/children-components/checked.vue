<template>
<div>
   <div class="click-button" :class="{active:carList}">
   <!-- <img src="../../../assets/img/cart/tick.svg" alt=""> -->
 </div>
</div>

</template>
<script>
export default{
  name:"CheckButton",
  props:{
    carList:Boolean,
  }

}
</script>
<style scoped>
.click-button{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:2px solid #ccc;
}
.active{
  background-color: hotpink;
  background-image: url("../../../assets/img/cart/tick.svg");
  background-repeat: no-repeat;
  background-position:center;
  border:0;
}
</style>