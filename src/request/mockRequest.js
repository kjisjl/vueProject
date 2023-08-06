import axios from "axios";
import nprogress from "nprogress";
import 'nprogress/nprogress.css'
const mockRequest=axios.create({
    baseURL:'http://mock.com'
});
mockRequest.interceptors.request.use(config=>{
    nprogress.start();
    return config
})
mockRequest.interceptors.response.use(res=>{
    nprogress.done()
    return res.data
},err=>{
    nprogress.done()
    alert(err)
})

export default mockRequest