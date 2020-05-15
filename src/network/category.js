import {request} from "./request"
export function getCateData(){
  return request({
    url:'/data/category/category.json'
  })
}
export function getChangeData(maitKey){
  return request({
    url:'/data/category/subcategory/'+maitKey+'.json'
  })
}
export function getHomeGoods(type,page){
  return request({
    url:'/data/home/data/'+type+'/'+page+".json"
  })
}