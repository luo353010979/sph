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
/* 
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})