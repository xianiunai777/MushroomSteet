<template>
  <div id="app">
  <mainTabbar></mainTabbar>
  </div>
</template>

<script>
import mainTabbar from "./components/common/tab-bar/maintabbar"
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style>
@import "./assets/css/base.css"

</style>
