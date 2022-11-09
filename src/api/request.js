//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import 'nprogress/nprogress.css'


//1:利用axios对象的方法create去创建一个axios实力
//2.request就是axios只不过稍微配置一下
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
})

//请求拦截器，在发请求之前，请求拦截器可以检测到，可以在请求之前做些事情
requests.interceptors.request.use((config) => {
    //config:配置对象，对象里有一个属性很重要，headers请求头
    //进度条开始动
    nprogress.start()
    return config
})


//响应拦截器
requests.interceptors.response.use((res) => {
    nprogress.done()
    return res.data
}, (err) => {
    nprogress.done()
    return Promise.reject(new Error('faile'))
})


export default requests