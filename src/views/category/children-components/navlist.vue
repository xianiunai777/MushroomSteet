<template>
  <div class="wap">
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll">
        <div
          v-for="(v,k) in titlelist"
          :key="k"
          class="nav-item"
          @click.prevent="changeInfo(v,k)"
          :class="{isactive:isborder==k}"
        >{{v.title}}</div>
      </cube-scroll>
    </div>
  </div>
</template>
<script>
import BetterScroll from "../../../components/common/BetterScroll/BetterScroll";
export default {
  name: "NavList",
  data() {
    return {
      isborder: 0
    };
  },
  methods: {
    changeInfo(v, k) {
      this.isborder = k;
      this.$emit("changedData", v.maitKey);
    }
  },
  components: {
    BetterScroll
  },
  props: {
    titlelist: Array
  }
};
</script>

<style scoped>
.nav-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.wap {
  float: left;
  height: 100vh;
  background: #eee;
}
.isactive {
  border-left: 2px solid hotpink;
}
.nav-list {
  width: 100px;
}
.content {
  height: calc(100% - 90px);
}
.left {
  float: left;
}
.scroll-list-wrap {
  width: 100px;
  overflow: hidden;
  float: left;
  height: calc(100% - 90px);
}
</style>

