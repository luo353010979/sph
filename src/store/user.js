import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogout,
} from "@/api";

const state = {
  code: "",
  token: localStorage.getItem("TOKEN"),
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },

  USERLOGIN(state, token) {
    state.token = token;
  },

  GETUSERINFO(state, info) {
    state.userInfo = info;
  },

  //清除本地数据
  CLEAR(state) {
    state.token = "";
    state.userInfo = {};
    localStorage.removeItem('TOKEN')
  },
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },

  //注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },

  //登录
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      localStorage.setItem("TOKEN", result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },

  //退出登录
  async userLogout({ commit }) {
    let result = await reqLogout();
    if (result.code == 200) {
      commit("CLEAR");
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },

  //获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error(result.message));
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
