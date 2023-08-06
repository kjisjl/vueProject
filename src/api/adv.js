import {mockRequest} from "@/request";

export const getFocusAdv=()=>mockRequest('/adv/focus')
//尾部广告
export  const getFooterAdv=()=>mockRequest.get('/adv/footerAdv')

//每日推荐广告
export  const getTodayAdv=()=>mockRequest.get('/adv/todayRecommend')

export const getNews=()=>mockRequest.get('/adv/news')