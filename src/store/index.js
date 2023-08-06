import Vue from "vue";
import Vuex from 'vuex';
import product from "@/store/product";
import maizuo from "@/store/maizuo";
import adv from "@/store/adv";
Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        product,
        maizuo,
        adv
    }
})

export default store
