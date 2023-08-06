import Vue from 'vue';
import '@/mock';
import App from '@/App.vue';
import router from "@/router";
import store from "@/store";
import '@/assets/css/reset.css'
//import filters from "@/filters";
import {filters} from "@/filters";
//Vue.use(filters) 插件

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    store,
    beforeCreate() {
        Vue.prototype.$bus = this;
        for (const key in filters) {
            Vue.filter(key, filters[key])
        }
    },
    render: h => h(App)
})