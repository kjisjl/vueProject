//直接暴露
export const filters = {
    currency(v) {
        return "￥" + v.toFixed(2)
    }
}


//暴露对象
//export default {
//    install(v) {
//        for (let key in filters) {
//            v.filter(key, filters[key])
//        }
//    }
//}


//暴露函数
//export default function(V){
//    for (const key in filters){
//        V.filter(key,filters[key])
//    }
//}

