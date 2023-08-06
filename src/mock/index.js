import Mock from 'mockjs';
import focusJson from '@/mock/focus.json'
import footerAdv from '@/mock/footerAdv.json'
import todayRecommend from "@/mock/todayRecommend.json";
import floor from "@/mock/floor.json";
import rank from "@/mock/rank.json";
import news from "@/mock/news.json";

/*
 * 第一个参数：请求地址
 * 第二个参数：请求类型
 * 第三个参数：响应体
 */
Mock.mock('http://mock.com/adv/focus','get',{
    data:focusJson,
    message:'ok'
});
Mock.mock('http://mock.com/adv/footerAdv','get',{
    message:'ok',
    data:footerAdv
});
Mock.mock('http://mock.com/adv/todayRecommend','get',{
    message:'ok',
    data:todayRecommend
})

//楼层
Mock.mock('http://mock.com/product/floor','get',{
    data:floor,
    message:"ok"
})

//rank
Mock.mock('http://mock.com/product/rank','get',{
    data:rank,
    message:'ok'
})

//news
Mock.mock('http://mock.com/adv/news','get',{
    data:news,
    message:'ok'
})