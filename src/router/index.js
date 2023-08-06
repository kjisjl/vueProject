import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home/index.vue";
import Login from "@/pages/Login/index.vue";
import Register from "@/pages/Register/index.vue";
import Search from "@/pages/Search/index.vue";
import {enVueRouter} from "@/utils/enhance";

Vue.use(VueRouter);
enVueRouter('push');
enVueRouter('replace');

const routes = [
    {
        path: '/',
        component: Home,
        meta:{
            isTabNav:true
        }
    },
    {
        path: '/login',
        component: Login,
        meta:{
            isHidden:true,
        }
    }, {
        path: '/register',
        component: Register,
        meta:{
            isHidden:true,
        }
    }, {
        path: '/search',
        component: Search,
        meta:{
            isTabNav:true
        }
    }

];
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router