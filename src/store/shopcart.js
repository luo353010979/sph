import {
  reqShopCartList,
  reqDeleteCartById,
  reqUpdateCheckedById,
} from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, data) {
    state.cartList = data;
  },
};
const actions = {
  //获取购物车列表
  async getCartList({ commit }) {
    let result = await reqShopCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },

  //删除购物车商品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      Promise.reject(new Error("fial"));
    }
  },

  //修改商品选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      Promise.reject(new Error("fail"));
    }
  },

  //删除选中的商品
  deleteAllCheckedCart({ dispatch, getters }) {
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1
          ? dispatch("deleteCartListBySkuId", item.skuId)
          : "";
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },

  //全选
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};

const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
