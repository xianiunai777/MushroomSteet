<template>
  <div class="commnet-info" v-if="Object.keys(comment).length!=0">
    <div class="comment-top">
      <div class="top-titles">用户评价</div>
      <div class="top-more">更多 ></div>
    </div>
    <div class="info-user">
      <img :src="comment.user.avatar" alt />
      <span>{{comment.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{comment.content}}</p>
      <div class="info-other">
        <span>{{comment.created|showData}}</span>
        <span>{{comment.style}}</span>
      </div>
    </div>
    <div class="info-images">
      <img :src="v" alt="" v-for="(v,k) in comment.images" :key="k">
    </div>
  </div>
</template>

<script>
import {dateFormat} from "../../../network/detial";
export default {
  name: "DetialComment",
  props: {
    comment: Object
  },
  filters: {
    showData(val) {
      return  dateFormat(new Date(val * 1000),'yyyy-MM-dd');
    }
  },
  watch:{
    comment(value){
      // console.log(value);
      
    }
  }
};
</script>

<style scoped>
.commnet-info{
   margin-bottom: 20px;
   padding: 0 10px;
}
.comment-top{
  height: 44px;
  line-height: 44px;
  display: flex;
  border-bottom: 1px solid #eee;
   border-top: 1px solid #eee;
  /* background: #eee; */
  justify-content: space-between;
}
.info-user img{
  width: 60px;
  margin:10px 20px 10px 0 ;
  border-radius: 50%;
  vertical-align: middle;
}
.info-detail p{
  line-height: 20px;
}
.info-other{
  margin-top:10px;
  color:#aaa;
} 
.info-other span{
  margin-right:10px
}
</style>