import requests from "./request";
import mockRequests from "./mockRequest";

//三级联动接口
///api/product/getBaseCategoryList  get     无参数
export const reqCategoryList = () =>
  requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });

//获取banner
export const reqGetBannerList = () =>
  mockRequests({
    url: "/banner",
    method: "get",
  });

//获取floor数据
export const reqFloorList = () =>
  mockRequests({
    url: "/floor",
    method: "get",
  });

//获取搜索模块数据 地址：/api/list  post
export const reqGetSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });

//获取商品详情
export const reqGoodsInfo = (skuId) =>
  requests({
    url: `/item/${skuId}`,
    method: "get",
  });

//将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });

//获取购物车列表
export const reqShopCartList = () =>
  requests({
    url: `/cart/cartList`,
    method: "get",
  });

//删除购物车商品
export const reqDeleteCartById = (skuId) =>
  requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });

//修改商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });

//获取验证码  /api/user/passport/sendCode/{phone}
export const reqGetCode = (phone) =>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
  });

//注册  api/user/passport/register
export const reqUserRegister = (data) =>
  requests({
    url: "/user/passport/register",
    method: "post",
    data,
  });

//登录
export const reqUserLogin = (data) =>
  requests({
    url: "/user/passport/login",
    method: "post",
    data,
  });

//获取用户信息
export const reqUserInfo = () =>
  requests({
    url: "/user/passport/auth/getUserInfo",
    method: "get",
  });

//退出登录
export const reqLogout = () =>
  requests({
    url: "/user/passport/logout",
    method: "get",
  });

//获取用户地址信息
export const reqAddressInfo = () =>
  requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

//获取商品清单
export const reqOrderInfo = () =>
  requests({
    url: "/order/auth/trade",
    method: "get",
  });

//提交订单
export const reqSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: "post",
    data,
  });

//获取支付信息
export const reqPayInfo = (orderId) =>
  requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
  });

//获取订单支付状态
export const reqPayState = (orderId) =>
  requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
  });

//获取个人中心的数据
export const reqMyOrderList = (page, limit) =>
  requests({
    url: `/order/auth/${page}/${limit}`,
    method: "get",
  });
