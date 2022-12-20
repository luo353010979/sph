import {
    reqShopCartList
} from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, data) {
        state.cartList = data
    }
};
const actions = {
    //获取购物车列表
    async getCartList({
        commit
    }) {
        let result = await reqShopCartList()
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    }

};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}