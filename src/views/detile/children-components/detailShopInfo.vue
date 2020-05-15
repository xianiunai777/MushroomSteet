<template>
  <div v-if="Object.keys(shops).length!=0" class="info-shop">
    <div class="shop-top">
      <img :src="shops.shopLogo" alt />
      <span class="shops-name">{{shops.name}}</span>
    </div>
    <!-- /////logo以及标题//////// -->
    <div class="shop-middle">
      <div class="shop-item1">
        <div class="num-item">{{shops.cSells|cSellsCountFilter}}</div>
        <div class="text-item">总销量</div>
      </div>

      <div class="shop-item2">
        <div class="num-item">{{shops.cGoods}}</div>
        <div class="text-item">全部宝贝</div>
      </div>
      <div class="shop-item3">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">
              <span>{{item.isBetter?'高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailShopInfo",
  props: {
    shops: Object
  },
  filters: {
    cSellsCountFilter(value) {
      let result = value;
      if (value > 1000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    }
  }
};
</script>

<style scoped>
.shop-top{
  margin: 20px 0;
}
.shop-top img{
  width: 60px;
  border-radius: 50%;
  border:1px solid #ccc;
  vertical-align: middle;
  margin-right: 20px ;
}
.shop-info{
  display: flex;
  justify-content: space-around;

}
.num-item{
  font-size:20px;
  margin-bottom: 10px;
}
.shop-item3 table tr{
 display: flex;
}
.shop-item2{
  width: 100px;
 border-right: 1px solid #ccc;
}
.shop-item3 tr{
  padding-bottom: 10px;
}
.shop-item3 td{
   margin-right:10px ;
 }
td.score-better{
  color:red;
  display: inline-block;
  width: 31px;
}
td.better-more{
  background: red;
  color:#fff;
}
.score{
  color:green;
}
.better{
  background: green;
  color:#fff;
}
.shop-middle{
  height: 100px;
   display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  text-align: center;
  margin: 20px 0 30px;
}
.btn button{
  background: #eee;
  border:0;
  border-radius: 10px;
  height: 40px;
  width: 150px;
  line-height: 40px;
  color:#888;
}
</style>