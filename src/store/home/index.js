import {
    reqCategoryList,
    reqGetBannerList
} from "@/api"

const state = {
    categoryList: [],
    bannerList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },

    GETBANNETLIST(state, bannerList) {
        state.bannerList = bannerList
    }
}
const actions = {
    //通过api里面的接口函数调用，向服务器发起请求，获取服务器的数据
    async categoryList({
        commit
    }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },

    async getBannerList({
        commit
    }) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit("GETBANNETLIST", result.data)
        }
    }
}
const getters = {

}


export default {
    state,
    mutations,
    actions,
    getters,
}