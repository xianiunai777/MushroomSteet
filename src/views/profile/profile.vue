<template>
  <div id="profile">
    <Navbar class="profile-navbar">
      <div slot="center">商城</div>
    </Navbar>
    <Header />
    <Main class="main"></Main>
  </div>
</template>

<script>
import Navbar from "../../components/common/nav-bar/navbar";
import Header from "./children-components/header-box";
import Main from "./children-components/main";
export default {
  name: "Profile",
  components: {
    Navbar,
    Header,
    Main
  }
};
</script>

<style scoped>
.profile-navbar {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: rgb(248, 149, 166);
}
#profile {
  background: #eee;
}
.main {
  margin: 15px 0;
}
</style>