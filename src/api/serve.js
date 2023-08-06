const express = require('express');
const likeData = require('./data/likeList.json')
const app = express();

// 请求方式：get
// 请求地址：http://jl.com:8082/likeList
// 请求参数：query
//     pageSize：每页显示的条数
//     pageNo:页码
// 响应结果：
// {
//      ok:1,
//      msg:"success",
//      likeList:[],// 喜欢列表
//      pageSum:1// 总页数
// }

//不能直接写http://jl.com:8082/likeList，端口号在listen里设置，get后跟端口号后面的地址
app.get("/likeList",(req,res)=>{
    let {pageSize=6,pageNo=1} = req.query
    res.json({
        ok:1,
        message:"success",
        likeList:likeData.slice((pageNo-1)*pageSize,pageSize*pageNo),
        pageSum:Math.ceil(likeData.length/pageSize)
    })
})
app.listen('8082', () => {
    console.log('success')
});
