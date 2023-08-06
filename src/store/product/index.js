import {getFloor, getProductList, getRank, postSearchProduct} from "@/api/product";

export default {
    namespaced:true,
    state:{
        productList:[],
        productFloor:[],
        productRank:[],
        searchProductResult:{
            goodsList:[],
            trademarkList:[],
            attrsList:[]
        }
    },
    mutations:{
        SET_PRODUCT_LIST(state,data){
            state.productList=data
        },
        SET_PRODUCT_FLOOR(state,data){
            state.productFloor=data
        },
        SET_PRODUCT_RANK(state,data){
            state.productRank=data
        },
        SET_SEARCH_PRODUCT(state,data){
            state.searchProductResult=data
        }
    },
    actions:{
        async getProductListAsync({commit},num=15){
            const {data}= await getProductList()
            commit('SET_PRODUCT_LIST',data.splice(0,num))
        },
        async getFloorAsync({commit}){
            const {data}=await  getFloor()
            commit('SET_PRODUCT_FLOOR',data)
        },
        async getRankAsync({commit}){
            const {data}=await getRank()
            commit('SET_PRODUCT_RANK',data)
        },
        async postSearchProductAsync({commit},body){
            const {data}=await postSearchProduct(body)
            commit('SET_SEARCH_PRODUCT',data)
        }
    }

}