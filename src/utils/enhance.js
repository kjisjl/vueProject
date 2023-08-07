import VueRouter from "vue-router";
export const enVueRouter=function(props){
    const native=VueRouter.prototype[props];
    VueRouter.prototype[props]=function (location,success,fail){
        //让push或replace不再报错
        return native.call(this,location,success,()=>{})
    }
}