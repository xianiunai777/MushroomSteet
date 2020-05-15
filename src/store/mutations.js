export default {
  addcar(state, payload) {true
    payload.check=true
    state.cartList.push(payload)
  },
  addcount(state, payload) {
    payload.count++
  },
  changeCheck(state,payload){
    payload.check=! payload.check
  },
  allcheck(state,ischange){
    state.cartList.forEach(function(item){
     item.check=!ischange
    });
  }
}