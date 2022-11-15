import requests from "./request";
import mockRequests from './mockRequest'

//三级联动接口
///api/product/getBaseCategoryList  get     无参数
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})

//获取banner
export const reqGetBannerList = ()=> mockRequests({url:'/banner',method:'get'})