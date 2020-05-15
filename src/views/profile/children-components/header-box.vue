<template>
  <div>
    <div class="header">
      <img src="../../../assets/img/profile/用户圆.png" alt class="user-img" />
      <div class="center">
        <p>
          <span>登录/</span>
          <span>注册</span>
        </p>
        <p>
          <img src="../../../assets/img/profile/手机.png" alt class="phone" />
          <span>暂无手机号绑定</span>
        </p>
      </div>
      <img src="../../../assets/img/profile/右.png" alt />
    </div>
    <div class="main">
      <div>
        <span class="font-red">0.00</span>元
        <br />
        <span>我的余额</span>
      </div>
      <div>
        <span class="font-red">0</span>个
        <br />
        <span>我的优惠</span>
      </div>
      <div>
        <span class="font-red">0</span>分
        <br />
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  display: flex;
  background: rgb(248, 149, 166);
  padding: 15px;
  line-height: 80px;
  align-items: center;
}
.user-img {
  background: #ccc;
  border-radius: 50%;
  height: 60px;
}
.phone {
  width: 20px;
  vertical-align: text-top;
}
.center {
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  line-height: 25px;
  margin-left: 15px;
  color: #fff;
}
.header img:nth-child(3) {
  height: 20px;
  vertical-align: center;
  /* line-height: 100px; */
}
.main {
  height: 90px;
  display: flex;
  text-align: center;
  background: #fff;
  overflow: hidden;
}
.font-red {
  color: red;
  font-size: 20px;
  line-height: 50px;
}
.main div {
  flex: 1;
  border-right: 1px solid #eee;
}
</style>