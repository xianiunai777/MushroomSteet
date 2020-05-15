<template>
  <div class="tab-con">
    <div v-for="(v,k) in titles" :key="k" @click="isActive(k)" :class="{active:k==currentIndex}">
      <span>{{v}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    isActive(k) {
      this.currentIndex = k;
      this.$emit('tabclick',k)
    }
  }
}
</script>

<style scoped>
.tab-con {
  height: 44px;
  line-height: 44px;
  display: flex;
  font-size: 14px;
  text-align: center;
  background: #fff;
}
.tab-con div {
  flex: 1;
}
.active {
  color: rgb(192, 83, 101);
}
.active span {
  padding: 5px;
  border-bottom: 1px solid palevioletred;
}
</style>