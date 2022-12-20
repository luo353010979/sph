import requests from "./request";
import mockRequests from './mockRequest'

//三级联动接口
///api/product/getBaseCategoryList  get     无参数
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

//获取banner
export const reqGetBannerList = () => mockRequests({
    url: '/banner',
    method: 'get'
})

//获取floor数据
export const reqFloorList = () => mockRequests({
    url: '/floor',
    method: 'get'
})


//获取搜索模块数据 地址：/api/list  post
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})


//获取商品详情
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'
})

//将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})