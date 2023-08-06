import {maizuoRequest} from "@/request";


// 正在热映：https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9925800
// 即将上映：https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=9925800

// headers:{
//                "X-Host":"mall.film-ticket.film.list",
//                "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.2.1","e":"16903322302568072615428097"}'
//            }
export const getMovie = (type = 1) => maizuoRequest.get('/gateway', {
    params: {
        cityId: 310100,
        pageNum: 1,
        pageSize: 4,
        type,
        k: Date.now()
    },
    headers: {
        "X-Host": "mall.film-ticket.film.list",
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16903322302568072615428097"}'
    }
})