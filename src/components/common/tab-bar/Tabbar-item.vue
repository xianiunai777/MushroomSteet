<template>
    <div class="tab-list" @click="listClick" :class="{active:isActive}">
      <div v-if="!isActive"><slot name="tab-icon"></slot></div>
      <div v-else><slot name="tab-icon-active"></slot></div>
      <div ><slot name="tab-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "Tabbar-item",
    data(){
      return {
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    props:{
      path:String,
    },
    methods:{
      listClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>

  .tab-list{
    flex: 1;
    text-align: center;
  }
  .tab-list .fa{
    font-size: 24px;
    margin-top: 3px;
  }
  .active{
    color: red;
  }
</style>
