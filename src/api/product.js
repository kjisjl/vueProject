import {sphRequest} from "@/request";
import {mockRequest} from '@/request'
import axios from "axios";
//首页分级
export const getProductList = () => sphRequest.get('/product/getBaseCategoryList')
//楼层
export const getFloor = () => mockRequest.get('/product/floor')
//rank
export const getRank = () => mockRequest.get('/product/rank')
//猜你喜欢
export  const getLike=(pageNo,pageSize)=>axios.get('/my/likeList',{
    params:{
        pageNo,
        pageSize
    }
})

//搜索商品
export const postSearchProduct=(body)=>{
    return sphRequest.post('/list',body)
}