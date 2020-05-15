 export function debounce(method,delay) {
  let timer = null;
  return function () {
      let self = this,
          args = arguments;
      timer && clearTimeout(timer);
      timer = setTimeout(function () {
          method.apply(self,args);
      },delay);
  }
}
let fn =debounce(function(){
  this.position = [];
      this.position.push(0);
      this.position.push(-this.$refs.goods.$el.offsetTop + 44);
      this.position.push(-this.$refs.comment.$el.offsetTop + 44);
      this.position.push(-this.$refs.recommend.$el.offsetTop + 44);
},300)