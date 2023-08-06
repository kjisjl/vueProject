import {sphRequest} from "@/request";
import {mockRequest} from '@/request'
//首页分级
export const getProductList = () => sphRequest.get('/product/getBaseCategoryList')
//楼层
export const getFloor = () => mockRequest.get('/product/floor')
//rank
export const getRank = () => mockRequest.get('/product/rank')

//搜索商品
export const postSearchProduct=(body)=>{
    return sphRequest.post('/list',body)
}