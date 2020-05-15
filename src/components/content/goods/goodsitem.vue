<template>
  <div class="goodsitem" @click="itemClick">
    <img :src="getImage" alt />
    <div>
      <p>{{goodsitem.title}}</p>
      <span>¥ {{goodsitem.price}}</span>
      <span>{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsitem: Object ||Array
  },
  methods:{
    itemClick(){     
      this.$router.push('/detile/'+this.goodsitem.iid)
    }
  },
  computed:{
    getImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
};
</script>

<style scoped>
.goodsitem {
  width: 50%;
  display: inline-block;
  padding: 0 5px;
  margin: 0 0 10px;
}
.goodsitem img {
  width: 100%;
  height: 80%;
}
/* 显示两行 */
/* 显示一行 */
.goodsitem p {
  line-height: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  margin: 5px 0;
  font-size: 13px;
}
.goodsitem span {
  text-align: center;
}
.goodsitem span:first-of-type {
  padding-left:10px;
  float: left;
  color: red;
}
.goodsitem span:last-of-type {
   padding-right:10px;
  float: right;
}
.goodsitem span:last-of-type::before {
  content: " ";
  display: inline-block;
  vertical-align: text-top;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>