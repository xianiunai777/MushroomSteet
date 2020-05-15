import {request} from "./request"
export function getDataDetial(iid){
  return request({
    url:'/data/detail/'+iid+'.json'
  })
}
export function getHotDataDetial(){
  return request({
    url:'/data/detail/recommend.json'
  })
}
export class GoodsInfo{
  constructor(columns,itemInfo,shopInfo){
    this.title=itemInfo.title
    this.nprice=itemInfo.price 
    this.oprice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.service=shopInfo.services
    this.desc=itemInfo.desc
    this.highPrice=itemInfo.highNowPrice
  }

}
// export class GoodsParams{
//   constructor(info,rule){
//     this.img=info.images?info.images[0]:'';
//     this.info=info.set;
//     this.tables=info.tables
    
//   }
// }
export class GoodsParam{
    constructor(info, rule) {
      this.image = info.image ? info.images[0] : '';
      this.infos = info.set;
      this.size = rule.tables;
    }
  }
export function dateFormat(date,format) {
    var o = {
    "M+" : date.getMonth()+1, //month
    "d+" : date.getDate(),    //day
    "h+" : date.getHours(),   //hour
    "m+" : date.getMinutes(), //minute
    "s+" : date.getSeconds(), //second
    "q+" : Math.floor((date.getMonth()+3)/3),  //quarter
    "S" : date.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
                (date.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
    RegExp.$1.length==1? o[k] :
    ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
    }
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
    
// let goodsInfo=new GoodsInfo()