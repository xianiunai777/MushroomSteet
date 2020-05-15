export default {
  addcarAtt(context, payload) {
    let catInfo1 = context.state.cartList.find((item) => item.iid == payload.iid)
    if (catInfo1) {
      context.commit('addcount', catInfo1)
    } else {
      payload.count = 1
      context.commit('addcar', payload)
    }
    // state.cartList.push(payload)
  }
}