import {getFocusAdv, getFooterAdv, getNews, getTodayAdv} from "@/api/adv";

const state = {
    advList: [],
    footerAdvList:[],
    todayAdv:[],
    news:[]
};
const mutations = {
    UP_ADV_LIST(state, advList) {
        state.advList = advList
    },
    UP_FOOTER_ADV(state,footerAdvList){
        state.footerAdvList=footerAdvList
    },
    UP_TODAY_ADV(state,todayAdv){
        state.todayAdv=todayAdv
    },
    UP_NEWS(state,news){
        state.news=news
    }
};
const actions = {
    async getFocusAdvAsync({commit}){
    const {data} = await getFocusAdv()
    commit('UP_ADV_LIST', data)
},
    async  getFooterAdvAsync({commit}){
        const {data}=await  getFooterAdv()
        commit('UP_FOOTER_ADV',data)
    },
    async getTodayAdvAsync({commit}){
        const{data}=await getTodayAdv()
        commit('UP_TODAY_ADV',data)
    },
    async getNewsAsync({commit}){
        const{data}= await getNews()
        commit('UP_NEWS',data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}