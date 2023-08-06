import axios from "axios";
import nprogress from "nprogress";
import  'nprogress/nprogress.css'
const maizuoRequest=axios.create({
    baseURL:'https://m.maizuo.com',
    timeout:5000
});
maizuoRequest.interceptors.request.use(config=>{
    nprogress.start()
    return config
})
maizuoRequest.interceptors.response.use(res=> {
    nprogress.done()
    return res.data
},err=>{
    nprogress.done()
    alert(err)
})
export default maizuoRequest