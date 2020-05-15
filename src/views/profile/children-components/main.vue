<template>
  <div id="main">
    <ul class="use-center">
      <li>
        <img src="../../../assets/img/profile/信息.png" alt />
        <span>我的消息</span>
      </li>
      <li>
        <img src="../../../assets/img/profile/积分商城.png" alt />
        <span>积分商城</span>
      </li>
      <li>
        <img src="../../../assets/img/profile/会员.png" alt />
        <span>会员卡</span>
      </li>
    </ul>
    <ul class="shopping">
      <li>
        <img src="../../../assets/img/profile/购物.png" alt />
        <span>我的购物车</span>
      </li>
      <li>
        <img src="../../../assets/img/profile/下载.png" alt />
        <span>下载购物APP</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "main"
};
</script>
<style scoped>
img {
  width: 18px;
  height: 20px;
  vertical-align: middle;
  margin: 0px 20px 0px 10px;
}
.use-center {
  height: 119px;
  overflow: hidden;
  background: #fff;
}
.main li {
  height: 40px;
  line-height: 40px;
}
.main span {
  display: inline-block;
  width: calc(100% - 48px);
  border-bottom: 1px solid #eee;
}
.shopping {
  margin-top: 15px;
  background: #fff;
}
.shopping li:last-of-type span {
  border: 0;
}
</style>